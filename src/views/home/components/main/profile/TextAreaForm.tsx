import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { profileStyles } from '../../../styles/profileStyles';
import ItemForm from './ItemForm';
import ProfileHook from './hooks/ProfileHook';
import {
    CareerDataFormValues,
    DataForm,
    DataFormValues,
    EducationDataFormValues,
    UrlDataFormValues,
    handleDataProps
} from '../../../../../types/profile';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import SwitchGeneral from './SwitchGeneral';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { ItemFormParams } from '../../../../../types/profile';

const TextAreaForm = ({ label, icon }: { label: string; icon?: string; }) => {
    return (
        <View style={{ height: 110, justifyContent: 'center', flexDirection: 'row' }}>

            <View style={{ flexDirection: 'column', alignItems: 'center', height: "90%", width: "80%" }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', height: "100%", width: "100%", paddingLeft: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', height: "80%", width: "90%", borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>
                        {icon === 'person-outline' ?
                            <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name="person-outline" size={28} color="#62ad9b" />
                            </View>
                            :
                            icon === 'translate' ?
                                <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                    <MaterialIcons name="translate" size={28} color="#62ad9b" />
                                </View>
                                :
                                icon === 'person' ?
                                    <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                        <FontAwesome6 name="person" size={28} color="#62ad9b" />
                                    </View>
                                    :
                                    null

                        }

                        <View style={{ height: "100%", width: "85%", alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput
                                multiline
                                numberOfLines={3}
                                style={profileStyles.inputBox}
                                placeholderTextColor="#000000"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: "20%", width: "100%" }}>
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

export default TextAreaForm;