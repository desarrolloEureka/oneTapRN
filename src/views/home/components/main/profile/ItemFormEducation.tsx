import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    CareerDataFormValues,
    IndexDataForm,
    DataFormValues,
    EducationDataFormValues,
    DataForm,
    EducationSubIndexDataForm
} from '../../../../../types/profile';
import ProfileHook from './hooks/ProfileHook';
import FormEducation from './FormEducation';

const ItemFormEducation = ({
    dataForm,
    handleDataSet,
    handleSeeMore,
    index,
    label,
    labelArray,
    value,
    itemDetail,
    isDetailOpen,
    icon,
    social,
    handleModalAlert,
}: {
    dataForm: DataForm;
    handleDataSet: (e: DataForm) => void;
    handleSeeMore: (e: number) => void;
    index: IndexDataForm;
    label?: string;
    labelArray:
    | DataFormValues[]
    | EducationDataFormValues[]
    | CareerDataFormValues[];
    value: any;
    itemDetail: number;
    isDetailOpen: boolean;
    icon?: string;
    social: boolean;
    handleModalAlert: ({
        index,
        subindex,
    }: {
        index: string;
        subindex: string;
    }) => void;
}) => {
    const {
        handleSwitch,
        handleData,
        handleAddData,
        handleDeleteData,
        isModalAlertLimit,
        handleModalAlertLimit,
        user,
    } = ProfileHook({
        handleDataSet,
    });

    return (
        <View style={{ height: labelArray.length > 1 ? 'auto' : 280, minHeight: 280, width: "100%", justifyContent: 'center', paddingTop: 20 }}>
            <View style={{ minHeight: 230, width: "100%", justifyContent: 'center', backgroundColor: "#e9e9e9" }}>

                <View style={{ height: 40, width: "100%", alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ height: "100%", width: "50%", justifyContent: 'center', flexDirection: 'row' }} onPress={() => { handleAddData('education', social) }} >
                        <View style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="plus-circle" size={20} color="#02AF9B" />
                        </View>
                        <View style={{ height: "100%", width: "95%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 11, color: "black" }}>Agregar formación academica</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {labelArray.map((val, key) => {
                    const myValue = (user && index == value[0]
                        ? user.profile[index]
                        : undefined) as unknown as DataFormValues;
                    return (
                        <View key={key} style={{ height: 200, justifyContent: 'center', flexDirection: 'row' }}>
                            <View style={{ height: "85%", width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ height: "30%", width: "90%", alignItems: 'center', justifyContent: 'center' }}>
                                    <FormEducation
                                        label={'°Titulo: '}
                                        handleSwitch={(e: any) => handleSwitch(e)}
                                        handleData={handleData}
                                        name={index}
                                        checked={val.checked}
                                        subindex={key}
                                        icon={val.icon}
                                        deleteAction={false}
                                        handleDeleteData={handleDeleteData}
                                        handleModalAlert={({ index, subindex }) => handleModalAlert({ index, subindex })}
                                        myValue={myValue}
                                        dataForm={dataForm}
                                        index={index}
                                        withCheck={true}
                                        subLabel={'title' as EducationSubIndexDataForm}
                                    />
                                </View>

                                <View style={{ height: "30%", width: "90%", alignItems: 'center', justifyContent: 'center' }}>
                                    <FormEducation
                                        label={'°Instituto: '}
                                        handleSwitch={(e: any) => handleSwitch(e)}
                                        handleData={handleData}
                                        name={index}
                                        checked={val.checked}
                                        subindex={key}
                                        icon={val.icon}
                                        deleteAction={true}
                                        handleDeleteData={handleDeleteData}
                                        handleModalAlert={({ index, subindex }) => handleModalAlert({ index, subindex })}
                                        myValue={myValue}
                                        dataForm={dataForm}
                                        index={index}
                                        withCheck={false}
                                        subLabel={'institution' as EducationSubIndexDataForm}
                                    />
                                </View>

                                <View style={{ height: "30%", width: "90%", alignItems: 'center', justifyContent: 'center' }}>
                                    <FormEducation
                                        label={'°Año: '}
                                        handleSwitch={(e: any) => handleSwitch(e)}
                                        handleData={handleData}
                                        name={index}
                                        checked={val.checked}
                                        subindex={key}
                                        icon={val.icon}
                                        deleteAction={false}
                                        handleDeleteData={handleDeleteData}
                                        handleModalAlert={({ index, subindex }) => handleModalAlert({ index, subindex })}
                                        myValue={myValue}
                                        dataForm={dataForm}
                                        index={index}
                                        withCheck={false}
                                        subLabel={'year' as EducationSubIndexDataForm}
                                    />
                                </View>

                                <View style={{ height: "10%", width: "90%", alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text style={{ color: "#02AF9B" }}>Educación y formación académica</Text>
                                </View>
                            </View>

                        </View>
                    );
                })
                }

                <TouchableOpacity style={{ height: 45, width: "100%", alignItems: 'center', justifyContent: 'center', borderTopColor: '#396593', borderTopWidth: 2 }} onPress={() => handleSeeMore(3)}>
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

export default ItemFormEducation;