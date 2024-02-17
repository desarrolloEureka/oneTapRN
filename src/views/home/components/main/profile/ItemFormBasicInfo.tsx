import React from 'react';
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
        <View style={{ height: labelArray.length > 1 ? 'auto' : 240, minHeight: 240, width: "100%", justifyContent: 'center', paddingTop: 20, paddingBottom: 20 }}>
            <View style={{ minHeight: 190, width: "100%", justifyContent: 'center', backgroundColor: "#e9e9e9" }}>
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

                {labelArray.map((val, key) => {
                    if (social === true) {
                        if (val.principal === true || val.social === true) {
                            const myValue = (user && user.profile && index == value[0]
                                ? user.profile[index]
                                : value[1]) as unknown as DataFormValues;
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
                        const myValue = (user && user.profile && index == value[0]
                            ? user.profile[index]
                            : value[1]) as unknown as DataFormValues;
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
                })}
            </View>
        </View>
    );
};

export default ItemFormBasicInfo;