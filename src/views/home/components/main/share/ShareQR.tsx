
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StackNavigation } from '../../../../../types/navigation';
import { useNavigation } from '@react-navigation/native';
import { GetUser } from '../../../../../reactQuery/users';
import QRCode from 'react-native-qrcode-svg';
import Feather from 'react-native-vector-icons/Feather';
import Clipboard from '@react-native-clipboard/clipboard';
import Share from 'react-native-share';
import TabNav from '../../tabNav/TabNav';

const ShareQR = () => {
    const navigation = useNavigation<StackNavigation>();
    const { data, error } = GetUser();
    const [isModalAlert, setIsModalAlert] = useState(false);
    const handleModalAlert = () => setIsModalAlert(!isModalAlert);
    const [copiedText, setIscopiedText] = useState(false);
    const [urlGlobal, setUrlGlobal] = useState('');

    const handleBackPress = () => {
        navigation.goBack();
    };

    const copyToClipboard = () => {
        Clipboard.setString("" + urlGlobal);
        setIscopiedText(true);

        // Después de 5 segundos, cambiar el estado de copiedText a false
        setTimeout(() => {
            setIscopiedText(false);
        }, 5000);
    };

    const handleTabPress = (tabName: string) => {
        if (tabName === "Professional" && data?.plan === "standard") {
            setIsModalAlert(true);
        } else {
            if (tabName === 'Social') {
                navigation.navigate('Profile');
            } else if (tabName === 'Professional') {
                navigation.navigate('ProfileProfessional');
            } else if (tabName === 'ShareQR') {
                navigation.navigate('ShareQR');
            } else {
                navigation.navigate('Home');
            }
        }
    };

    const handleShare = async () => {
        Share.open({
            title: 'Compartir enlace',
            message: '',
            type: 'url',
            url: urlGlobal,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    };

    useEffect(() => {
        if (data && data.preview) {
            const url = data?.preview;
            //const nuevaURL = url && url.replace('localhost:3000', 'on-tap-tawny.vercel.app');
            const nuevaURL = url && url.replace(/localhost:3000|on-tap-tawny.vercel.app/g, 'backoffice.onetap.com.co');
            setUrlGlobal(nuevaURL);
        }
    }, [])


    return urlGlobal && (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: '10%', width: '100%' }}>
                <TouchableOpacity style={{ height: '100%', width: '20%', justifyContent: 'center', alignItems: 'center' }} onPress={handleBackPress}>
                    <MaterialIcons name="arrow-back-ios" size={27} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: '85%', width: '85%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    {data && data.preview && urlGlobal ?
                        <QRCode
                            value={urlGlobal}
                            size={300}
                            color="black"
                            backgroundColor="white"
                        />
                        :
                        null
                    }
                </View>
            </View>

            <View style={{ height: '30%', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ height: '35%', width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ height: '55%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', borderRadius: 30, borderWidth: 0.2, flexDirection: 'row', backgroundColor: '#02AF9B' }} onPress={copyToClipboard}>
                        <View style={{ height: '100%', width: '25%', justifyContent: 'center', alignItems: 'center', }}>
                            <Feather name="copy" size={24} color="#396593" />
                        </View>
                        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
                            <Text style={{ fontSize: 14.5, color: 'white', fontWeight: '500' }}>
                                Copiar URL del Perfil
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: '35%', width: '80%', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <TouchableOpacity style={{ height: '55%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', borderRadius: 30, borderWidth: 0.2, flexDirection: 'row', backgroundColor: '#02AF9B' }} onPress={handleShare}>
                        <View style={{ height: '100%', width: '25%', justifyContent: 'center', alignItems: 'center', }}>
                            <Feather name="share" size={24} color="#396593" />
                        </View>
                        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
                            <Text style={{ fontSize: 14.5, color: 'white', fontWeight: '500' }}>
                                Compartir Perfil
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {copiedText === true && (<View style={{ height: '35%', width: '80%', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={{ color: 'black' }}>¡Copiado!</Text>
                </View>)}

            </View>


            <TabNav
                handleTabPress={handleTabPress}
                numberNav={4}
            />

        </SafeAreaView >
    );
};

export default ShareQR;