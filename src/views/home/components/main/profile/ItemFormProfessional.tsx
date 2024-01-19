import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { profileStyles } from '../../../styles/profileStyles';
import SwitchGeneral from './SwitchGeneral';
import {
    CareerDataFormValues,
    IndexDataForm,
    DataFormValues,
    EducationDataFormValues,
    DataForm,
} from '../../../../../types/profile';
import ProfileHook from './hooks/ProfileHook';

const ItemFormProfessional = ({
    index,
    labelArray,
    social,
    value,
    dataForm,
    handleSeeMore,
    itemDetail,
}: {
    index: IndexDataForm;
    labelArray: DataFormValues[] | EducationDataFormValues[] | CareerDataFormValues[];
    social: boolean;
    value: any
    dataForm: DataForm;
    handleSeeMore: (e: number) => void;
    itemDetail: number;
}) => {

    const { handleAddData } = ProfileHook({
        dataForm,
    });
    return (
        <View style={{ height: itemDetail === 4 && value[0] === 'professional_career' ? 660 : 310, width: "100%", justifyContent: 'center' }}>
            <View style={{ height: "90%", width: "100%", justifyContent: 'center', backgroundColor: "#e9e9e9" }}>
               
                <View style={{ height: itemDetail === 4 && value[0] === 'professional_career' ? "10%" : "15%", width: "100%", alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ height: "100%", width: "55%", justifyContent: 'center', flexDirection: 'row' }} onPress={() => { handleAddData('professional_career', social) }} >
                        <View style={{ height: "100%", width: "20%", alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="plus-circle" size={20} color="#02AF9B" />
                        </View>
                        <View style={{ height: "100%", width: "75%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 11 }}>Agregar trayectoria profesional</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ height: itemDetail === 4 && value[0] === 'professional_career' ? "80%" : "70%", width: "100%", justifyContent: 'center' }}>
                    {itemDetail === 4 && value[0] === 'professional_career' ?
                        labelArray.map((val, key) => {
                            return (
                                <View key={key} style={{ height: 160, justifyContent: 'center', flexDirection: 'row' }}>
                                    < View style={{ height: "100%", width: "75%", alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ height: "20%", width: "90%", alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>
                                            <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                                <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                                    <Ionicons name="analytics-outline" size={30} color="#02AF9B" />
                                                </View>
                                                <View style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text>°Empresa:</Text>
                                                </View>
                                                <View style={{ height: "100%", width: "60%", alignItems: 'center', justifyContent: 'center' }}>
                                                    <TextInput
                                                        style={profileStyles.inputBox}
                                                        placeholderTextColor="#000000"
                                                        underlineColorAndroid="transparent"
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ height: "20%", width: "90%", alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>
                                            <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                                <View style={{ height: "100%", width: "25%", alignItems: 'flex-start', justifyContent: 'center' }}>
                                                    <Text>°Cargo:</Text>
                                                </View>
                                                <View style={{ height: "100%", width: "75%", alignItems: 'center', justifyContent: 'center' }}>
                                                    <TextInput
                                                        style={profileStyles.inputBox}
                                                        placeholderTextColor="#000000"
                                                        underlineColorAndroid="transparent"
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ height: "20%", width: "90%", alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>
                                            <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                                <View style={{ height: "100%", width: "40%", alignItems: 'flex-start', justifyContent: 'center' }}>
                                                    <Text>°Fecha de inicio:</Text>
                                                </View>
                                                <View style={{ height: "100%", width: "60%", alignItems: 'center', justifyContent: 'center' }}>
                                                    <TextInput
                                                        style={profileStyles.inputBox}
                                                        placeholderTextColor="#000000"
                                                        underlineColorAndroid="transparent"
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ height: "20%", width: "90%", alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>
                                            <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                                <View style={{ height: "100%", width: "55%", alignItems: 'flex-start', justifyContent: 'center' }}>
                                                    <Text>°Fecha de finalización:</Text>
                                                </View>
                                                <View style={{ height: "100%", width: "45%", alignItems: 'center', justifyContent: 'center' }}>
                                                    <TextInput
                                                        style={profileStyles.inputBox}
                                                        placeholderTextColor="#000000"
                                                        underlineColorAndroid="transparent"
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ height: "20%", width: "90%", alignItems: 'flex-start', justifyContent: 'center' }}>
                                            <Text style={{ color: "#02AF9B" }}>Trayectoria profesional</Text>
                                        </View>
                                    </View>
                                    <View style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ height: "50%", width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                                            <SwitchGeneral />
                                        </View>
                                    </View>
                                </View>
                            );
                        })
                        :
                        <View style={{ height: 160, justifyContent: 'center', flexDirection: 'row' }}>
                            < View style={{ height: "100%", width: "75%", alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ height: "20%", width: "90%", alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>
                                    <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                        <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                                            <Ionicons name="analytics-outline" size={30} color="#02AF9B" />
                                        </View>
                                        <View style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }}>
                                            <Text>°Empresa:</Text>
                                        </View>
                                        <View style={{ height: "100%", width: "60%", alignItems: 'center', justifyContent: 'center' }}>
                                            <TextInput
                                                style={profileStyles.inputBox}
                                                placeholderTextColor="#000000"
                                                underlineColorAndroid="transparent"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: "20%", width: "90%", alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>
                                    <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                        <View style={{ height: "100%", width: "25%", alignItems: 'flex-start', justifyContent: 'center' }}>
                                            <Text>°Cargo:</Text>
                                        </View>
                                        <View style={{ height: "100%", width: "75%", alignItems: 'center', justifyContent: 'center' }}>
                                            <TextInput
                                                style={profileStyles.inputBox}
                                                placeholderTextColor="#000000"
                                                underlineColorAndroid="transparent"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: "20%", width: "90%", alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>
                                    <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                        <View style={{ height: "100%", width: "40%", alignItems: 'flex-start', justifyContent: 'center' }}>
                                            <Text>°Fecha de inicio:</Text>
                                        </View>
                                        <View style={{ height: "100%", width: "60%", alignItems: 'center', justifyContent: 'center' }}>
                                            <TextInput
                                                style={profileStyles.inputBox}
                                                placeholderTextColor="#000000"
                                                underlineColorAndroid="transparent"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: "20%", width: "90%", alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>
                                    <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                        <View style={{ height: "100%", width: "55%", alignItems: 'flex-start', justifyContent: 'center' }}>
                                            <Text>°Fecha de finalización:</Text>
                                        </View>
                                        <View style={{ height: "100%", width: "45%", alignItems: 'center', justifyContent: 'center' }}>
                                            <TextInput
                                                style={profileStyles.inputBox}
                                                placeholderTextColor="#000000"
                                                underlineColorAndroid="transparent"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: "20%", width: "90%", alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text style={{ color: "#02AF9B" }}>Trayectoria profesional</Text>
                                </View>
                            </View>
                            <View style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ height: "50%", width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                                    <SwitchGeneral />
                                </View>
                            </View>
                        </View>
                    }
                </View>

                <TouchableOpacity style={{ height: itemDetail === 4 && value[0] === 'professional_career' ? "10%" : "15%", width: "100%", alignItems: 'center', justifyContent: 'center', borderTopColor: '#396593', borderTopWidth: 2 }} onPress={() => handleSeeMore(4)}>
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
        </View >

    );
};

export default ItemFormProfessional;