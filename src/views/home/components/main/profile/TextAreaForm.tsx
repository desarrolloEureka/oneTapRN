import React, { useRef, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { profileStyles } from '../../../styles/profileStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ItemFormParams } from '../../../../../types/profile';
import CustomSwitchGeneral from './CustomSwitchGeneral';


const TextAreaForm = ({
    label,
    name,
    handleSwitch,
    handleData,
    checked,
    myValue,
    icon,
    value,
    dataForm,
    index,
}: ItemFormParams) => {

    const dataRef = useRef<any>(null);
    useEffect(() => {
        if (dataRef.current && myValue && dataForm && index) {
            dataRef.current = myValue;
        }
    }, [dataForm, dataRef, index, myValue]);

    return (
        <View style={{ height: 110, justifyContent: 'center', flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column', alignItems: 'center', height: "90%", width: "80%" }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', height: "100%", width: "100%", paddingLeft: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', height: "20%", width: "100%" }}>
                        <Text style={profileStyles.label}>{label}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', height: "80%", width: "90%", borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>
                        {icon === 'PersonOutlinedIcon' ?
                            <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name="person-outline" size={28} color="#02AF9B" />
                            </View>
                            :
                            icon === 'TranslateIcon' ?
                                <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                    <MaterialIcons name="translate" size={28} color="#02AF9B" />
                                </View>
                                :
                                icon === 'AccessibilityOutlinedIcon' ?
                                    <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                      {/*   <FontAwesome6 name="person" size={28} color="#02AF9B" /> */}
                                        {/* <MaterialCommunityIcons name="head-lightbulb-outline" size={28} color="#02AF9B" /> */}
                                        <FontAwesome5 name="medal" size={28} color="#02AF9B" />

                                    </View>
                                    :
                                    icon === 'competenias' ?
                                        <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                            <MaterialCommunityIcons name="head-lightbulb-outline" size={28} color="#02AF9B" />
                                        </View>
                                        :
                                        null

                        }
                        <View style={{ height: "100%", width: "85%", alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput
                                ref={dataRef}
                                value={value}
                                multiline
                                numberOfLines={3}
                                style={profileStyles.inputBox}
                                placeholderTextColor="#000000"
                                underlineColorAndroid="transparent"
                                onChangeText={text => handleData({ name: name, text: text, currentDataRef: dataRef })}
                            />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center', height: "100%", width: "20%" }}>
                <CustomSwitchGeneral
                    name={name}
                    handleSwitch={({ checked: boolean, name: string }) => handleSwitch({ checked, name })}
                    checked={checked}
                />
            </View>
        </View>
    );
};

export default TextAreaForm;