import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { profileStyles } from '../../../styles/profileStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ItemFormParams } from '../../../../../types/profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomSwitchGeneral from './CustomSwitchGeneral';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CountryFlag from "react-native-country-flag";
import { countries } from '../../../../../globals/constants';

const ItemForm = ({
  label,
  name,
  handleSwitch,
  handleData,
  checked,
  deleteAction,
  icon,
  handleModalAlert,
  myValue,
  index,
  subindex,
  openModalIndicative,
  handleOpenModalIndicative
}: ItemFormParams) => {
  const dataRef = useRef<any>(null);
  const [inputText, setInputText] = useState('');

  const value = () => {
    if (
      index !== 'phones' &&
      index !== 'education' &&
      index !== 'emails' &&
      index !== 'urls' &&
      index !== 'professional_career'
    ) {
      return dataRef?.current?.text ?? myValue?.text;
    } else {
      if (dataRef.current && dataRef.current.length) {
        if (index === 'phones') {
          return dataRef?.current[subindex as any];
        } else {
          return dataRef?.current[subindex as any]?.text;
        }
      }
    }
  };

  const getCountryFlag = (item: any) => {
    const country = countries.find(country => country.id === item);
    return country ? country.flag : '';
  };

  const getCountryName = (item: any) => {
    const country = countries.find(country => country.id === item);
    return country ? country.code : '';
  };

  useEffect(() => {
    if (dataRef.current && myValue) {
      dataRef.current = myValue;
      value();
    }
  }, [myValue, inputText]);

  return (
    <View style={{ height: 115, justifyContent: 'center', flexDirection: 'row' }}>
      <View style={{ flexDirection: 'column', alignItems: 'center', height: '90%', width: '80%' }}>
        <View style={{ flexDirection: 'column', alignItems: 'flex-start', height: '100%', width: '100%', paddingLeft: 10, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', height: '20%', width: '90%', }}>
            <Text style={profileStyles.label}>  {label === 'name' ? 'Nombres' :
              label === 'last_name' ? 'Apellidos' :
                label === 'profession' ? 'Profesión' :
                  label === 'occupation' ? 'Ocupación' :
                    label === 'address' ? 'Dirección' :
                      label === 'company' ? 'Empresa' :
                        label === 'position' ? 'Cargo' :
                          label === 'professional_profile' ? 'Perfil Profesional' :
                            label === 'other_competencies' ? 'Otras Competencias' :
                              label === 'skills' ? 'Habilidades' :
                                label === 'languages' ? 'Idiomas' :
                                  label === 'achievements_recognitions' ? 'Logros y reconocimientos' :
                                    label === 'phones' ? 'Telefono' :
                                      label === 'emails' ? 'Correo' :
                                        label === 'urls' ? 'urls' :
                                          label}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', height: '55%', width: '90%', borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>
            {name === 'phones' &&
              <View style={{ height: '100%', width: '35%', alignItems: 'flex-start', justifyContent: 'center' }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', height: '70%', width: '98%', alignItems: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 5 }}
                  onPress={() => handleOpenModalIndicative({ name: name, dataRef: dataRef, subindex: subindex })}
                >
                  <View style={{ display: 'flex', flexDirection: 'row', height: '100%', width: '75%', alignItems: 'center', justifyContent: 'center' }}>
                    <CountryFlag isoCode={getCountryFlag(myValue && Array.isArray(myValue) ? myValue[subindex as number]?.indicative : 'CO+57')} size={12} />
                    <Text>
                      {" " + getCountryName(myValue && Array.isArray(myValue) ? myValue[subindex as number]?.indicative : '+57')}
                    </Text>
                  </View>
                  <View style={{ height: '100%', width: '25%', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="#02AF9B" />
                  </View>
                </TouchableOpacity>
              </View>
            }

            {icon === 'PersonOutlinedIcon' ? (
              <View style={{ height: '100%', width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="person-outline" size={28} color="#02AF9B" />
              </View>
            ) : icon === 'FilePresentOutlinedIcon' ? (
              <View
                style={{
                  height: '100%',
                  width: '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome name="graduation-cap" size={28} color="#02AF9B" />
              </View>
            ) : icon === 'factory' ? (
              <View
                style={{
                  height: '100%',
                  width: '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons name="factory" size={28} color="#02AF9B" />
              </View>
            ) : icon === 'WorkOutlineOutlinedIcon' ? (
              <View
                style={{
                  height: '100%',
                  width: '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons name="tie" size={28} color="#02AF9B" />
              </View>
            ) : icon === 'ExploreOutlinedIcon' ? (
              <View
                style={{
                  height: '100%',
                  width: '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons name="explore" size={28} color="#02AF9B" />
              </View>
            ) : icon === 'translate' ? (
              <View
                style={{
                  height: '100%',
                  width: '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons name="translate" size={28} color="#02AF9B" />
              </View>
            ) : icon === 'AttachFileOutlinedIcon' ? (
              <View
                style={{
                  height: '100%',
                  width: '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name="paperclip"
                  size={28}
                  color="#02AF9B"
                />
              </View>
            ) : icon === 'EmailOutlinedIcon' ? (
              <View
                style={{
                  height: '100%',
                  width: '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={28}
                  color="#02AF9B"
                />
              </View>
            ) : icon === 'LocalPhoneOutlinedIcon' ? (
              <View
                style={{
                  height: '100%',
                  width: '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <SimpleLineIcons name="phone" size={28} color="#02AF9B" />
              </View>
            ) : icon === 'TranslateIcon' ? (
              <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name="translate" size={28} color="#02AF9B" />
              </View>
            ) : icon === 'AccessibilityOutlinedIcon' ? (
              <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome5 name="medal" size={28} color="#02AF9B" />
              </View>
            ) : null}

            <View style={{ height: '100%', width: name === 'phones' ? '50%' : '85%', alignItems: 'center', justifyContent: 'center' }}>
              <TextInput
                ref={dataRef}
                id={`${name}-input`}
                keyboardType={
                  name === 'phones'
                    ? 'numeric'
                    : name === 'emails'
                      ? 'email-address'
                      : 'default'
                }
                style={profileStyles.inputBox}
                placeholderTextColor="#000000"
                underlineColorAndroid="transparent"
                maxLength={name === 'phones' ? 10 : undefined}
                onChangeText={(text: any) => {
                  setInputText(text);
                  handleData({
                    name: name,
                    text: text,
                    currentDataRef: dataRef,
                    key: subindex,
                    type: true
                  });
                }}
                value={
                  myValue && !Array.isArray(myValue) ? myValue?.text : myValue && myValue[subindex as number]?.text
                }
              />
            </View>
          </View>
        </View>
      </View>

      {deleteAction === true && handleModalAlert ? (
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            width: '20%',
          }}>
          <View style={{ alignItems: 'center', height: '50%', width: '100%' }}>
            <CustomSwitchGeneral
              name={name}
              subindex={subindex}
              handleSwitch={(e: any) =>
                handleSwitch({ checked, name, subindex, currentDataRef: dataRef })
              }
              checked={
                myValue && !Array.isArray(myValue)
                  ? myValue?.checked
                  : myValue && myValue[subindex as number]?.checked
              }
            />
          </View>
          <TouchableOpacity
            style={{ alignItems: 'center', height: '50%', width: '100%' }}
            onPress={() =>
              handleModalAlert({ index: index, subindex: '' + subindex })
            }>
            <FontAwesome name="trash-o" size={25} color="#02AF9B" />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            width: '20%',
          }}>

          <CustomSwitchGeneral
            name={name}
            subindex={subindex}
            handleSwitch={(e: any) => handleSwitch({ checked, name, subindex })}
            checked={checked}
          />
        </View>
      )}

    </View>
  );
};

export default ItemForm;