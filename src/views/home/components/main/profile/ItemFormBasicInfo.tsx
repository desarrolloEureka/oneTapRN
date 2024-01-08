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
    index,
    labelArray,
    social,
    value,
    dataForm,
    handleSeeMore,
    itemDetail
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

    const firstItem = labelArray[0];
    return (
        <View style={{ height: itemDetail === 1 && value[0] === 'phones' ? 390 : itemDetail === 2 && value[0] === 'emails' ? 390 : 190, width: "100%", justifyContent: 'center', marginTop: 10 }}>
            <View style={{ height: "90%", width: "100%", justifyContent: 'center', backgroundColor: "#e9e9e9" }}>

                <View style={{ height: itemDetail === 1 && value[0] === 'phones' ? "10%" : "15%", width: "100%", alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ height: "100%", width: "40%", justifyContent: 'center', flexDirection: 'row' }} onPress={() => {
                        if (value[0] === 'phones') {
                            handleAddData('phones', social);
                        } else if (value[0] === 'emails') {
                            handleAddData('emails', social);
                        }
                    }}>
                        <View style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="plus-circle" size={20} color="#62ad9b" />
                        </View>
                        <View style={{ height: "100%", width: "75%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 11 }}>Agregar otro telefono</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ height: itemDetail === 1 && value[0] === 'phones' ? "75%" : itemDetail === 2 && value[0] === 'emails' ? "75%" : "60%", width: "100%", justifyContent: 'center', paddingBottom: 20 }}>
                    {itemDetail === 1 && value[0] === 'phones' || itemDetail === 2 && value[0] === 'emails' ?
                        labelArray.map((val, key) => {
                            if (social === true) {/* Social */
                                if (val.principal === true || val.social === true) {
                                    return (
                                        <>
                                            <ItemForm
                                                label={val.label!}
                                                key={key}
                                                icon={val.icon}
                                            />
                                        </>
                                    );
                                }
                            } else {/* Pro */
                                if (val.principal === true || val.social === false) {
                                    return (
                                        <ItemForm
                                            label={val.label!}
                                            key={key}
                                            icon={val.icon}
                                        />
                                    );
                                }
                            }
                        })
                        :
                        <ItemForm
                            label={firstItem.label}
                            icon={firstItem.icon}
                        />
                    }
                </View>

                <TouchableOpacity style={{ height: itemDetail === 1 && value[0] === 'phones' ? "15%" : itemDetail === 2 && value[0] === 'emails' ? "15%" : "20%", width: "100%", alignItems: 'center', justifyContent: 'center', borderTopColor: '#396593', borderTopWidth: 2 }} onPress={() => {
                    if (value[0] === 'phones') {
                        handleSeeMore(1);
                    } else if (value[0] === 'emails') {
                        handleSeeMore(2);
                    }
                }}>
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

export default ItemFormBasicInfo;