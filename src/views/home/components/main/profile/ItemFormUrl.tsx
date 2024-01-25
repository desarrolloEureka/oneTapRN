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
    NetworksSubIndexDataForm
} from '../../../../../types/profile';
import { profileStyles } from '../../../styles/profileStyles';
import SwitchGeneral from './SwitchGeneral';
import ProfileHook from './hooks/ProfileHook';
import FormUrl from './FormUrl';

const ItemFormUrl = ({
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
        handleDataNetworks,
        handleAddData,
        isModalAlertLimit,
        handleModalAlertLimit,
        handleDeleteData,
        handleData,
        user,
    } = ProfileHook({
        handleDataSet,
    });

    const [showUrls, setShowUrls] = useState(false);

    const handleOpenUrl = () => {
        setShowUrls(!showUrls);
    };

    const arrayData = [labelArray[0]];
    const data = itemDetail === 5 && value[0] === 'urls' ? arrayData : labelArray

    return (
        <View style={{ height: labelArray.length > 1 ? 'auto' : 280, minHeight: 280, width: "100%", justifyContent: 'center', paddingTop: 20 }}>
            <View style={{ minHeight: 230, width: "100%", justifyContent: 'center', backgroundColor: "#e9e9e9" }}>

                <View style={{ height: 40, width: "100%", alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ height: "100%", width: "35%", justifyContent: 'center', flexDirection: 'row' }} onPress={() => { handleAddData('urls', social) }} >
                        <View style={{ height: "100%", width: "20%", alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="plus-circle" size={20} color="#02AF9B" />
                        </View>
                        <View style={{ height: "100%", width: "75%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 11 }}>Agregar otra URL</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {data.map((val, key) => {
                    const myValue = (user && index == value[0]
                        ? user.profile[index]
                        : undefined) as unknown as DataFormValues;
                    return (
                        <View key={key} style={{ height: 230, justifyContent: 'center' }}>

                            <View style={{ height: "60%", width: "100%", justifyContent: 'center', flexDirection: 'row' }}>
                                <View style={{ height: "100%", width: "98%", alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ height: "40%", width: "90%", alignItems: 'center', justifyContent: 'center' }}>
                                        <FormUrl
                                            label={'Nombre del dato: '}
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
                                            withCheck={true}
                                            subLabel={'name' as NetworksSubIndexDataForm}
                                        />
                                    </View>

                                    <View style={{ height: "40%", width: "90%", alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                                            <FormUrl
                                                label={'URL opcional: '}
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
                                                subLabel={'url' as NetworksSubIndexDataForm}
                                            />
                                        </View>
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
                                        <View style={{ height: "50%", width: "98%", justifyContent: 'center', alignItems: 'center', backgroundColor: "white", borderRadius: 14, flexDirection: 'row' }}>

                                            <TouchableOpacity style={{ height: "95%", width: "14%", justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'facebook' ? "#f3f4f6" : "transparent" }}
                                                onPress={(text: any) =>
                                                    handleDataNetworks({
                                                        name: value[0],
                                                        text: 'facebook',
                                                        subindex: 'icon',
                                                        key,
                                                    })}>
                                                <Ionicons name="logo-facebook" size={23} color="#02AF9B" />
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{ height: "95%", width: "14%", justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'twitter' ? "#f3f4f6" : "transparent" }}
                                                onPress={(text: any) =>
                                                    handleDataNetworks({
                                                        name: value[0],
                                                        text: 'twitter',
                                                        subindex: 'icon',
                                                        key,
                                                    })}>
                                                <Ionicons name="logo-twitter" size={23} color="#02AF9B" />
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{ height: "95%", width: "14%", justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'pending' ? "#f3f4f6" : "transparent" }}
                                                onPress={(text: any) =>
                                                    handleDataNetworks({
                                                        name: value[0],
                                                        text: 'pending',
                                                        subindex: 'icon',
                                                        key,
                                                    })}>
                                                <Ionicons name="logo-twitter" size={23} color="#02AF9B" />
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{ height: "95%", width: "14%", justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'instagram' ? "#f3f4f6" : "transparent" }}
                                                onPress={(text: any) =>
                                                    handleDataNetworks({
                                                        name: value[0],
                                                        text: 'instagram',
                                                        subindex: 'icon',
                                                        key,
                                                    })}>
                                                <Ionicons name="logo-instagram" size={23} color="#02AF9B" />
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{ height: "95%", width: "14%", justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'linkedin' ? "#f3f4f6" : "transparent" }}
                                                onPress={(text: any) =>
                                                    handleDataNetworks({
                                                        name: value[0],
                                                        text: 'linkedin',
                                                        subindex: 'icon',
                                                        key,
                                                    })}>
                                                <Ionicons name="logo-linkedin" size={23} color="#02AF9B" />
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{ height: "95%", width: "14%", justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'tikTok' ? "#f3f4f6" : "transparent" }}
                                                onPress={(text: any) =>
                                                    handleDataNetworks({
                                                        name: value[0],
                                                        text: 'tikTok',
                                                        subindex: 'icon',
                                                        key,
                                                    })}>
                                                <MaterialIcons name="tiktok" size={23} color="#02AF9B" />
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        null
                                    }
                                </View>
                            </View>
                        </View>
                    );
                })
                }
                <TouchableOpacity style={{ height: 45, width: "100%", alignItems: 'center', justifyContent: 'center', borderTopColor: '#396593', borderTopWidth: 2 }} onPress={() => handleSeeMore(5)}>
                    <View style={{ height: "100%", width: "30%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "75%", alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 12, color: "#396593" }}>{itemDetail === 5 && value[0] === 'urls' ? "Ver más (2)" : "Ver Menos"}</Text>
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

export default ItemFormUrl;