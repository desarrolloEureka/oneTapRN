import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import {
    CareerDataFormValues,
    IndexDataForm,
    DataFormValues,
    EducationDataFormValues,
    DataForm,
} from '../../../../../types/profile';

import { profileStyles } from '../../../styles/profileStyles';
import SwitchGeneral from './SwitchGeneral';
import ProfileHook from './hooks/ProfileHook';

const ItemFormUrl = ({
    index,
    labelArray,
    social,
    value,
    dataForm
}: {
    index: IndexDataForm;
    labelArray: DataFormValues[] | EducationDataFormValues[] | CareerDataFormValues[];
    social: boolean;
    value: any
    dataForm: DataForm;
}) => {

    const { handleAddData } = ProfileHook({
        dataForm,
    });

    const [showUrls, setShowUrls] = useState(false);

    const handleOpenUrl = () => {
        setShowUrls(!showUrls);
    };

    return (
        <View style={{ height: 310, width: "100%", justifyContent: 'center' }}>
            <View style={{ height: "90%", width: "100%", justifyContent: 'center', backgroundColor: "#e9e9e9" }}>

                <View style={{ height: "15%", width: "100%", alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ height: "100%", width: "35%", justifyContent: 'center', flexDirection: 'row' }} onPress={() => { handleAddData('urls', social) }} >
                        <View style={{ height: "100%", width: "20%", alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="plus-circle" size={20} color="#62ad9b" />
                        </View>
                        <View style={{ height: "100%", width: "75%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 11 }}>Agregar otra URL</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {labelArray.map((val, key) => {
                    return (
                        <View key={key} style={{ height: 200, justifyContent: 'center' }}>

                            <View style={{ height: "60%", width: "100%", justifyContent: 'center', flexDirection: 'row' }}>
                                <View style={{ height: "100%", width: "75%", alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ height: "40%", width: "90%", alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>
                                        <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                            <View style={{ height: "100%", width: "42%", alignItems: 'flex-start', justifyContent: 'center' }}>
                                                <Text>°Nombre del dato:</Text>
                                            </View>
                                            <View style={{ height: "100%", width: "58%", alignItems: 'center', justifyContent: 'center' }}>
                                                <TextInput
                                                    style={profileStyles.inputBox}
                                                    placeholderTextColor="#000000"
                                                    underlineColorAndroid="transparent"
                                                />
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ height: "40%", width: "90%", alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>
                                        <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                            <View style={{ height: "100%", width: "35%", alignItems: 'flex-start', justifyContent: 'center' }}>
                                                <Text>°URL opcional:</Text>
                                            </View>
                                            <View style={{ height: "100%", width: "65%", alignItems: 'center', justifyContent: 'center' }}>
                                                <TextInput
                                                    style={profileStyles.inputBox}
                                                    placeholderTextColor="#000000"
                                                    underlineColorAndroid="transparent"
                                                />
                                            </View>
                                        </View>
                                    </View>

                                </View>
                                <View style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ height: "80%", width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                                        <SwitchGeneral />
                                    </View>
                                </View>
                            </View>

                            <View style={{ height: "40%", width: "100%", justifyContent: 'center', flexDirection: 'row' }}>
                                <View style={{ height: "100%", width: "15%", justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ height: "60%", width: "85%", justifyContent: 'center', alignItems: 'center', backgroundColor: "white", borderRadius: 100 }} onPress={handleOpenUrl}>
                                        <FontAwesome5 name="shopping-cart" size={23} color="#396593" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: "100%", width: "85%", justifyContent: 'center', alignItems: 'center' }}>
                                    {showUrls ?
                                        <View style={{ height: "50%", width: "98%", justifyContent: 'center', backgroundColor: "white", borderRadius: 14, flexDirection: 'row' }}>
                                            <TouchableOpacity style={{ height: "100%", width: "11%", justifyContent: 'center', alignItems: 'center' }}>
                                                <Ionicons name="logo-facebook" size={23} color="#62ad9b" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ height: "100%", width: "11%", justifyContent: 'center', alignItems: 'center' }}>
                                                <Ionicons name="logo-twitter" size={23} color="#62ad9b" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ height: "100%", width: "11%", justifyContent: 'center', alignItems: 'center' }}>
                                                <Ionicons name="logo-twitter" size={23} color="#62ad9b" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ height: "100%", width: "11%", justifyContent: 'center', alignItems: 'center' }}>
                                                <Ionicons name="logo-instagram" size={23} color="#62ad9b" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ height: "100%", width: "11%", justifyContent: 'center', alignItems: 'center' }}>
                                                <Ionicons name="logo-linkedin" size={23} color="#62ad9b" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ height: "100%", width: "11%", justifyContent: 'center', alignItems: 'center' }}>
                                                <MaterialIcons name="tiktok" size={23} color="#62ad9b" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ height: "100%", width: "11%", justifyContent: 'center', alignItems: 'center' }}>
                                                <MaterialCommunityIcons name="email-outline" size={23} color="#62ad9b" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ height: "100%", width: "11%", justifyContent: 'center', alignItems: 'center' }}>
                                                <Fontisto name="world-o" size={23} color="#62ad9b" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ height: "100%", width: "11%", justifyContent: 'center', alignItems: 'center' }}>
                                                <Feather name="send" size={23} color="#62ad9b" />
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        null
                                    }
                                </View>
                            </View>
                        </View>
                    );
                })}

                <TouchableOpacity style={{ height: "15%", width: "100%", alignItems: 'center', justifyContent: 'center', borderTopColor: '#396593', borderTopWidth: 2 }}>
                    <View style={{ height: "100%", width: "30%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "75%", alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 12, color: "#396593" }}>Ver más (2)</Text>
                        </View>
                        <View style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="angle-down" size={35} color="#396593" />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default ItemFormUrl;