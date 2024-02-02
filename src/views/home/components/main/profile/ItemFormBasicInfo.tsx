import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemForm from './ItemForm';
import {
    CareerDataFormValues,
    IndexDataForm,
    DataFormValues,
    EducationDataFormValues,
    DataForm
} from '../../../../../types/profile';
import ProfileHook from './hooks/ProfileHook';

const ItemFormBasicInfo = ({
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
    handleModalAlert: ({ index, subindex }: { index: string, subindex: string }) => void;
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

    const arrayData = [labelArray[0]];
    const data = itemDetail === 1 && value[0] === 'phones' || itemDetail === 2 && value[0] === 'emails' ? arrayData : labelArray;

    return data && (
        <View style={{ height: labelArray.length > 1 ? 'auto' : 280, minHeight: 280, width: "100%", justifyContent: 'center', paddingTop: 20 }}>
            <View style={{ minHeight: 230, width: "100%", justifyContent: 'center', backgroundColor: "#e9e9e9" }}>
                <View style={{ height: 40, width: "100%", alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ height: "100%", width: "40%", justifyContent: 'center', flexDirection: 'row' }} onPress={() => {
                        if (value[0] === 'phones') {
                            handleAddData('phones', social);
                        } else if (value[0] === 'emails') {
                            handleAddData('emails', social);
                        }
                    }}>
                        <View style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="plus-circle" size={20} color="#02AF9B" />
                        </View>
                        <View style={{ height: "100%", width: "75%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 11, color: "black" }}>{value[0] === 'phones' ? "Agregar otro teléfono" : "Agregar otro correo"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {data.map((val, key) => {
                    if (social === true) {
                        if (val.principal === true || val.social === true) {

                            const myValue = (user && index == value[0]
                                ? user.profile[index]
                                : undefined) as unknown as DataFormValues;
                            return (
                                <>
                                    <ItemForm
                                        key={key}
                                        label={val.label!}
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
                                    />
                                </>
                            );
                        }
                    } else {
                        if (val.principal === true || val.social === false) {
                            const myValue = (user && index == value[0]
                                ? user.profile[index]
                                : undefined) as unknown as DataFormValues;
                            return (
                                <ItemForm
                                    key={key}
                                    label={val.label!}
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
                                />
                            );
                        }
                    }
                })}

                <TouchableOpacity style={{ height: 45, width: "100%", alignItems: 'center', justifyContent: 'center', borderTopColor: '#396593', borderTopWidth: 2 }}
                    onPress={() => {
                        if (value[0] === 'phones') {
                            handleSeeMore(1);
                        } else if (value[0] === 'emails') {
                            handleSeeMore(2);
                        }
                    }}>
                    <View style={{ height: "100%", width: "30%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "75%", alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 12, color: "#396593" }}>{itemDetail === 1 && value[0] === 'phones' ? "Ver más (2)" : itemDetail === 2 && value[0] === 'emails' ? "Ver más (2)" : "Ver Menos"} </Text>
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

export default ItemFormBasicInfo;