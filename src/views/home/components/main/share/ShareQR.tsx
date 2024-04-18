
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RouteStackParamList } from '../../../../../types/navigation';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GetUser } from '../../../../../reactQuery/users';
import QRCode from 'react-native-qrcode-svg';
import Feather from 'react-native-vector-icons/Feather';
import Clipboard from '@react-native-clipboard/clipboard';
import Share from 'react-native-share';

const ShareQR = () => {
    const { data, error } = GetUser();
    const [isModalAlert, setIsModalAlert] = useState(false);
    const handleModalAlert = () => setIsModalAlert(!isModalAlert);
    const navigation = useNavigation<StackNavigationProp<RouteStackParamList, 'Home'>>();
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
            const nuevaURL = url && url.replace('localhost:3000', 'on-tap-tawny.vercel.app');
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
                    <TouchableOpacity style={{ height: '55%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', borderRadius: 30, borderWidth: 0.2, flexDirection: 'row' }} onPress={copyToClipboard}>
                        <View style={{ height: '100%', width: '25%', justifyContent: 'center', alignItems: 'center', }}>
                            <Feather name="copy" size={23} color="#396593" />
                        </View>
                        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
                            <Text style={{ fontSize: 14.5, color: 'black', fontWeight: '500' }}>
                                Copiar URL
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: '35%', width: '80%', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <TouchableOpacity style={{ height: '55%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', borderRadius: 30, borderWidth: 0.2, flexDirection: 'row' }} onPress={handleShare}>
                        <View style={{ height: '100%', width: '25%', justifyContent: 'center', alignItems: 'center', }}>
                            <Feather name="share" size={23} color="#396593" />
                        </View>
                        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
                            <Text style={{ fontSize: 14.5, color: 'black', fontWeight: '500' }}>
                                Compartir URL
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {copiedText === true && (<View style={{ height: '35%', width: '80%', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text>¡Copiado!</Text>
                </View>)}

            </View>

            <View style={{
                flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#E9E9E9', height: 80, position: 'absolute', bottom: 0, width: '100%'
            }}>

                <TouchableOpacity style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }} onPress={() => handleTabPress('Home')}>
                    <Icon name="home" size={25} color="black" />
                    <Text style={{ color: 'black' }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }} onPress={() => handleTabPress('Social')}>
                    <Icon name="users" size={25} color="black" />
                    <Text style={{ color: 'black' }}>Social</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }} onPress={() => handleTabPress('Professional')}>
                    <Ionicons name="newspaper-sharp" size={28} color="black" />
                    <Text style={{ color: 'black' }}>PRO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center', borderTopWidth: 3.5, borderColor: '#396593' }} onPress={() => handleTabPress('ShareQR')}>
                    <Ionicons name="newspaper-sharp" size={28} color="black" />
                    <Text style={{ color: 'black' }}>QR</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView >
    );
};

export default ShareQR;