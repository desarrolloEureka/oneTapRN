import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome6Brands from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';

import {
    CareerDataFormValues,
    IndexDataForm,
    DataFormValues,
    EducationDataFormValues,
    DataForm,
    NetworksSubIndexDataForm
} from '../../../../../types/profile';
import ProfileHook from './hooks/ProfileHook';
import FormUrl from './FormUrl';
import IconVSCO from './icons/IconVSCO';
import IconZoom from './icons/IconZoom';
import IconWhatsAppB from './icons/IconWhatsAppB';
import IconBooking from './icons/IconBooking';
import IconOnlyFans from './icons/IconOnlyFans';
import ModalIcons from './ModalIcons';

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
        isModalIcons,
        setModalIcons,
        itemUrlSelected,
        itemUrlKey,
        handleModalIcons
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
                        <View style={{ height: "100%", width: "50%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 11, color: "black" }}>Agregar URL</Text>
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
                                            label={'Nombre: '}
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
                                                label={'Sitio Web/URL: '}
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

                                <View style={{ height: "100%", width: "15%", justifyContent: 'center', alignItems: 'center', paddingLeft: 1 }}>
                                    <TouchableOpacity style={{ height: "55%", width: "90%", justifyContent: 'center', alignItems: 'center', backgroundColor: "white", borderRadius: 80 }} onPress={() => handleModalIcons(val, key)}>
                                        <FontAwesome5 name="shopping-cart" size={23} color="#396593" />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ height: "100%", width: "85%", justifyContent: 'center', alignItems: 'center' }}>
                                    {/*   {showUrls ?
                                        <View style={{ height: "50%", width: "98%", justifyContent: 'center', alignItems: 'center', backgroundColor: "white", borderRadius: 14, flexDirection: 'row' }}>
                                            <ScrollView
                                                horizontal={true}
                                            >
                                                <TouchableOpacity style={{ height: "100%", width: 38, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'www' ? "#d9dce0" : "transparent", borderRadius: 5, marginLeft: 3 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'www',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome5 name="link" size={20} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'facebook' ? "#d9dce0" : "transparent", borderRadius: 5 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'facebook',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <Ionicons name="logo-facebook" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'threads' ? "#d9dce0" : "transparent", borderRadius: 5 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'threads',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="square-threads" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'linkedin' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'linkedin',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <Ionicons name="logo-linkedin" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'messenger' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'messenger',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <Fontisto name="messenger" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'instagram' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'instagram',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <Ionicons name="logo-instagram" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'tiktok' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'tiktok',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands
                                                        name="tiktok" size={21} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'snapchat' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'snapchat',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome name="snapchat-square" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'twitter' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'twitter',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="square-x-twitter" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'twitch' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'twitch',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="twitch" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'youtube' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'youtube',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="youtube" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'whatsapp' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'whatsapp',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="whatsapp" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'zoom' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'zoom',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <IconZoom />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'line' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'line',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="line" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'gmail' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'gmail',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <MaterialCommunityIcons name="gmail" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'email' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'email',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <MaterialCommunityIcons name="email" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'phone' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'phone',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome name="phone" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'telegram' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'telegram',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="telegram" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'whatsAppBusiness' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'whatsAppBusiness',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <IconWhatsAppB />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'skype' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'skype',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="skype" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'wechat' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'wechat',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <AntDesign name="wechat" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'paypal' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'paypal',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="paypal" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'paypal' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'paypal',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <IconVSCO />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'tumblr' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'tumblr',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="square-tumblr" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'vimeo' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'vimeo',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="vimeo-v" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'spotify' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'spotify',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="spotify" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'deezer' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'deezer',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="deezer" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'appleMusic' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'appleMusic',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <Fontisto name="applemusic" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'googleMaps' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'googleMaps',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <MaterialCommunityIcons name="google-maps" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'tripAdvisor' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'tripAdvisor',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome5Brands name="tripadvisor" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'booking' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'booking',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <IconBooking />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'tinder' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'tinder',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <Fontisto name="tinder" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'amazon' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'amazon',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="amazon" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'onlyFans' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'onlyFans',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <IconOnlyFans />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'airbnb' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'airbnb',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="airbnb" size={23} color="#02AF9B" />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ height: "100%", width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: val.icon === 'pinterest' ? "#d9dce0" : "transparent", borderRadius: 10 }}
                                                    onPress={(text: any) =>
                                                        handleDataNetworks({
                                                            name: value[0],
                                                            text: 'pinterest',
                                                            subindex: 'icon',
                                                            key,
                                                        })}>
                                                    <FontAwesome6Brands name="pinterest" size={23} color="#02AF9B" />
                                                </TouchableOpacity>
                                            </ScrollView>
                                        </View>
                                        :
                                        null
                                    } */}
                                </View>

                            </View>
                        </View>
                    );
                })
                }
                {/*   <TouchableOpacity style={{ height: 45, width: "100%", alignItems: 'center', justifyContent: 'center', borderTopColor: '#396593', borderTopWidth: 2 }} onPress={() => handleSeeMore(5)}>
                    <View style={{ height: "100%", width: "30%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "75%", alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 12, color: "#396593" }}>{itemDetail === 5 && value[0] === 'urls' ? "Ver más (2)" : "Ver Menos"}</Text>
                        </View>
                        <View style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="angle-down" size={35} color="#396593" />
                        </View>
                    </View>
                </TouchableOpacity> */}

            </View>

            <ModalIcons
                isModalIcons={isModalIcons}
                setModalIcons={setModalIcons}
                value={value}
                val={itemUrlSelected}
                keyItem={itemUrlKey}
                handleDataNetworks={handleDataNetworks}
            />
        </View >
    );
};

export default ItemFormUrl;