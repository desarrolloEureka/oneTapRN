import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { profileStyles } from '../../../styles/profileStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import SwitchGeneral from './SwitchGeneral';

const ItemForm = ({ label, icon }: { label?: string; icon?: string; }) => {
    return (
        <View style={{ height: 80, justifyContent: 'center', flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column', alignItems: 'center', height: "100%", width: "80%" }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', height: "100%", width: "100%", paddingLeft: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: "80%", width: "90%", borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>

                        {icon === 'person-outline' ?
                            <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name="person-outline" size={28} color="#62ad9b" />
                            </View>
                            :
                            icon === 'file-present' ?
                                <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                    <MaterialIcons name="file-present" size={28} color="#62ad9b" />
                                </View>
                                :
                                icon === 'work-outline' ?
                                    <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                        <MaterialIcons name="work-outline" size={28} color="#62ad9b" />
                                    </View>
                                    :
                                    icon === 'explore' ?
                                        <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                            <MaterialIcons name="explore" size={28} color="#62ad9b" />
                                        </View>
                                        :
                                        icon === 'translate' ?
                                            <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                                <MaterialIcons name="translate" size={28} color="#62ad9b" />
                                            </View>
                                            :
                                            icon === 'paperclip' ?
                                                <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                                    <MaterialCommunityIcons name="paperclip" size={28} color="#62ad9b" />
                                                </View>
                                                :
                                                icon === 'email-outline' ?
                                                    <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                                        <MaterialCommunityIcons name="email-outline" size={28} color="#62ad9b" />
                                                    </View>
                                                    :
                                                    icon === 'phone' ?
                                                        <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                                            <SimpleLineIcons name="phone" size={28} color="#62ad9b" />
                                                        </View>
                                                        :
                                                        null

                        }

                        <View style={{ height: "100%", width: "85%", alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput
                                style={profileStyles.inputBox}
                                placeholderTextColor="#000000"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: "20%", width: "90%" }}>
                        <Text style={profileStyles.label}>{label}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', height: "100%", width: "20%" }}>
                <SwitchGeneral />
            </View>
        </View>
    );
};

export default ItemForm;