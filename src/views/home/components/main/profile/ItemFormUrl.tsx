import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import FontAwesome6Brands from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import IconZoom from './icons/IconZoom';
import IconWhatsAppB from './icons/IconWhatsAppB';
import IconVSCO from './icons/IconVSCO';
import IconBooking from './icons/IconBooking';
import IconOnlyFans from './icons/IconOnlyFans';

import {
  CareerDataFormValues,
  IndexDataForm,
  DataFormValues,
  EducationDataFormValues,
  DataForm,
  NetworksSubIndexDataForm,
  SocialDataForm,
  ProfessionalDataForm,
  handleDataProps,
  handleDataNetworksProps,
} from '../../../../../types/profile';
import ProfileHook from './hooks/ProfileHook';
import FormUrl from './FormUrl';
import ModalIcons from './ModalIcons';
import { UserData } from '../../../../../types/user';

const ItemFormUrl = ({
  dataForm,
  handleDataSet,
  index,
  labelArray,
  value,
  handleModalAlert,
  isProUser,
  handleData,
  user,
  handleSwitch,
  handleAddData,
  handleDataNetworks,
  setModalIcons,
  itemUrlKey,
  itemUrlSelected,
  handleModalIcons,
  isModalIcons,
  handleDeleteData,
}: {
  dataForm: SocialDataForm | ProfessionalDataForm;
  handleDataSet: (e: SocialDataForm | ProfessionalDataForm) => void;
  index: IndexDataForm;
  labelArray:
  | DataFormValues[]
  | EducationDataFormValues[]
  | CareerDataFormValues[];
  value: any;
  handleModalAlert: ({
    index,
    subindex,
  }: {
    index: string;
    subindex: string;
  }) => void;
  isProUser: boolean;
  handleData: ({
    name,
    text,
    subindex,
    key,
    currentDataRef,
  }: handleDataProps) => void;
  user: UserData;
  handleSwitch: (e: any) => void;
  handleAddData: (index: any) => void;
  handleDataNetworks: ({
    name,
    text,
    subindex,
    key,
  }: handleDataNetworksProps) => void;
  setModalIcons: (e: any) => void;
  itemUrlKey: number;
  itemUrlSelected: any;
  handleModalIcons: (item: any, key: any) => void;
  isModalIcons: boolean;
  handleDeleteData: () => void;
}) => {
  return (
    <View
      style={{
        height: 'auto',
        minHeight: 280,
        width: '100%',
        justifyContent: 'center',
        paddingTop: 20,
        marginBottom: 20,
      }}>
      <View
        style={{ minHeight: 230, width: "100%", justifyContent: 'center', alignItems: 'center', backgroundColor: "#e9e9e9" }}>
        <View style={{ height: 50, width: "95%", alignItems: 'flex-end', flexDirection: 'row' }}>
          <View style={{ height: "100%", width: "65%", justifyContent: 'flex-start', alignItems: 'flex-end', flexDirection: 'row' }}>
            <View style={{ height: "75%", width: "48%", justifyContent: 'center', alignItems: 'center', backgroundColor: '#02af9b', borderRadius: 5 }}>
              <Text style={{ fontSize: 13, color: 'white' }}>Registro de URLs</Text>
            </View>
          </View>
          <TouchableOpacity style={{ height: "100%", width: "35%", justifyContent: 'center', flexDirection: 'row' }} onPress={() => { handleAddData('urls'); }}>
            <View style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center', }}>
              <Icon name="plus-circle" size={20} color="#396593" />
            </View>
            <View
              style={{ height: '100%', width: '50%', justifyContent: 'center' }}>
              <Text style={{ fontSize: 11, color: 'black' }}>Agregar URL</Text>
            </View>
          </TouchableOpacity>
        </View>

        {labelArray.map((val, key) => {
          if (index == 'urls') {
            const myValue = (user && user.profile
              ? isProUser
                ? user.profile.professional
                  ? user.profile.professional?.[index]
                  : dataForm && dataForm[index]
                : user.profile.social
                  ? user.profile?.social?.[index]
                  : dataForm && dataForm[index]
              : dataForm && dataForm[index]) as unknown as DataFormValues;

            return (
              <View
                key={key}
                style={{
                  height: 230,
                  justifyContent: 'center',
                  borderBottomWidth:
                    key !== labelArray.length - 1 ? 2 : undefined,
                  borderBlockColor:
                    key !== labelArray.length - 1 ? '#d4d4d4' : undefined,
                  marginTop: 10,
                }}>
                <View
                  style={{
                    height: '60%',
                    width: '100%',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: '100%',
                      width: '98%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: '40%',
                        width: '90%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
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
                        handleModalAlert={({ index, subindex }) =>
                          handleModalAlert({ index, subindex })
                        }
                        myValue={myValue}
                        index={index}
                        withCheck={true}
                        subLabel={'name' as NetworksSubIndexDataForm}
                      />
                    </View>

                    <View
                      style={{
                        height: '40%',
                        width: '90%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          height: '100%',
                          width: '100%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'row',
                        }}>
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
                          handleModalAlert={({ index, subindex }) =>
                            handleModalAlert({ index, subindex })
                          }
                          myValue={myValue}
                          index={index}
                          withCheck={false}
                          subLabel={'url' as NetworksSubIndexDataForm}
                        />
                      </View>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    height: '40%',
                    width: '100%',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: '100%',
                      width: '20%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingLeft: 1,
                    }}>
                    <TouchableOpacity
                      style={{
                        height: '55%',
                        width: '68%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        //backgroundColor: 'white',
                        borderRadius: 80,
                      }}
                      onPress={() => handleModalIcons(val, key)}>

                      {val.icon === 'www' ?
                        <FontAwesome5 name="link" size={20} color="#396593" />
                        :
                        val.icon === 'facebook' ?
                          <Ionicons
                            name="logo-facebook"
                            size={25}
                            color="#396593"
                          />
                          :
                          val.icon === 'threads' ?
                            <FontAwesome6Brands
                              name="square-threads"
                              size={25}
                              color="#396593"
                            />
                            :
                            val.icon === 'tiktok' ?
                              <FontAwesome6Brands
                                name="tiktok"
                                size={21}
                                color="#396593"
                              />
                              :
                              val.icon === 'linkedin' ?
                                <Ionicons
                                  name="logo-linkedin"
                                  size={25}
                                  color="#396593"
                                />
                                :
                                val.icon === 'messenger' ?
                                  <Fontisto name="messenger" size={25} color="#396593" />
                                  :
                                  val.icon === 'instagram' ?
                                    <Ionicons
                                      name="logo-instagram"
                                      size={25}
                                      color="#396593"
                                    />
                                    :
                                    val.icon === 'snapchat' ?
                                      <FontAwesome
                                        name="snapchat-square"
                                        size={25}
                                        color="#396593"
                                      />
                                      :
                                      val.icon === 'twitter' ?
                                        <FontAwesome6Brands
                                          name="square-x-twitter"
                                          size={25}
                                          color="#396593"
                                        />
                                        :
                                        val.icon === 'twitch' ?
                                          <FontAwesome6Brands
                                            name="twitch"
                                            size={25}
                                            color="#396593"
                                          />
                                          :
                                          val.icon === 'youtube' ?
                                            <FontAwesome6Brands
                                              name="youtube"
                                              size={25}
                                              color="#396593"
                                            />
                                            :
                                            val.icon === 'whatsapp' ?
                                              <FontAwesome6Brands
                                                name="whatsapp"
                                                size={25}
                                                color="#396593"
                                              />
                                              :
                                              val.icon === 'zoom' ?
                                                <IconZoom
                                                  color="#396593"
                                                />
                                                :
                                                val.icon === 'line' ?
                                                  <FontAwesome6Brands
                                                    name="line"
                                                    size={25}
                                                    color="#396593"
                                                  />
                                                  :
                                                  val.icon === 'gmail' ?
                                                    <MaterialCommunityIcons
                                                      name="gmail"
                                                      size={25}
                                                      color="#396593"
                                                    />
                                                    :
                                                    val.icon === 'email' ?
                                                      <MaterialCommunityIcons
                                                        name="email"
                                                        size={25}
                                                        color="#396593"
                                                      />
                                                      :
                                                      val.icon === 'phone' ?
                                                        <FontAwesome name="phone" size={25} color="#396593" /> :
                                                        val.icon === 'telegram' ?
                                                          <FontAwesome6Brands
                                                            name="telegram"
                                                            size={25}
                                                            color="#396593"
                                                          />
                                                          :
                                                          val.icon === 'whatsappbusiness' ?
                                                            <IconWhatsAppB
                                                              color="#396593"
                                                            />
                                                            :
                                                            val.icon === 'skype' ?
                                                              <FontAwesome6Brands
                                                                name="skype"
                                                                size={25}
                                                                color="#396593"
                                                              />
                                                              :
                                                              val.icon === 'wechat' ?
                                                                <AntDesign name="wechat" size={25} color="#396593" />
                                                                :
                                                                val.icon === 'paypal' ?
                                                                  <FontAwesome6Brands
                                                                    name="paypal"
                                                                    size={25}
                                                                    color="#396593"
                                                                  />
                                                                  :
                                                                  val.icon === 'vsco' ?
                                                                    <IconVSCO
                                                                      color="#396593"
                                                                    />
                                                                    :
                                                                    val.icon === 'tumblr' ?
                                                                      <FontAwesome6Brands
                                                                        name="square-tumblr"
                                                                        size={25}
                                                                        color="#396593"
                                                                      />
                                                                      :
                                                                      val.icon === 'vimeo' ?
                                                                        <FontAwesome6Brands
                                                                          name="vimeo-v"
                                                                          size={25}
                                                                          color="#396593"
                                                                        />
                                                                        :
                                                                        val.icon === 'spotify' ?
                                                                          <FontAwesome6Brands
                                                                            name="spotify"
                                                                            size={25}
                                                                            color="#396593"
                                                                          />
                                                                          :
                                                                          val.icon === 'deezer' ?
                                                                            <FontAwesome6Brands
                                                                              name="deezer"
                                                                              size={25}
                                                                              color="#396593"
                                                                            />
                                                                            :
                                                                            val.icon === 'applemusic' ?
                                                                              <Fontisto name="applemusic" size={25} color="#396593" />
                                                                              :
                                                                              val.icon === 'googlemaps' ?
                                                                                <MaterialCommunityIcons
                                                                                  name="google-maps"
                                                                                  size={25}
                                                                                  color="#396593"
                                                                                />
                                                                                :
                                                                                val.icon === 'tripadvisor' ?
                                                                                  <FontAwesome5Brands
                                                                                    name="tripadvisor"
                                                                                    size={25}
                                                                                    color="#396593"
                                                                                  />
                                                                                  :
                                                                                  val.icon === 'booking' ?
                                                                                    <IconBooking
                                                                                      color="#396593"
                                                                                    />
                                                                                    :
                                                                                    val.icon === 'tinder' ?
                                                                                      <Fontisto name="tinder" size={25} color="#396593" />
                                                                                      :
                                                                                      val.icon === 'amazon' ?
                                                                                        <FontAwesome6Brands
                                                                                          name="amazon"
                                                                                          size={25}
                                                                                          color="#396593"
                                                                                        />
                                                                                        :
                                                                                        val.icon === 'onlyfans' ?
                                                                                          <IconOnlyFans
                                                                                            color="#396593"
                                                                                          />
                                                                                          :
                                                                                          val.icon === 'airbnb' ?
                                                                                            <FontAwesome6Brands
                                                                                              name="airbnb"
                                                                                              size={25}
                                                                                              color="#396593"
                                                                                            />
                                                                                            :
                                                                                            val.icon === 'pinterest' ?
                                                                                              <FontAwesome6Brands
                                                                                                name="pinterest"
                                                                                                size={25}
                                                                                                color="#396593"
                                                                                              />
                                                                                              :
                                                                                              <Fontisto name="world-o" size={32} color="#396593" />
                      }

                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, textAlign: 'center', color: 'black' }}>
                      Seleccionar Icono
                    </Text>
                  </View>
                  <View
                    style={{
                      height: '100%',
                      width: '80%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                </View>
              </View>
            );
          }
        })}
      </View>

      <ModalIcons
        isModalIcons={isModalIcons}
        setModalIcons={setModalIcons}
        value={value}
        val={itemUrlSelected}
        keyItem={itemUrlKey}
        handleDataNetworks={handleDataNetworks}
      />
    </View>
  );
};

export default ItemFormUrl;