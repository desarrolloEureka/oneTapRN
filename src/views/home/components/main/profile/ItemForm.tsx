import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { profileStyles } from '../../../styles/profileStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ItemFormParams } from '../../../../../types/profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomSwitchGeneral from './CustomSwitchGeneral';

const ItemForm = ({
  label,
  name,
  handleSwitch,
  handleData,
  checked,
  deleteAction,
  icon,
  handleDeleteData,
  handleModalAlert,
  myValue,
  dataForm,
  index,
  subindex,
}: ItemFormParams) => {
  const dataRef = useRef<any>(null);
  const [inputText, setInputText] = useState('');

  const value = () => {
    // const i = subindex as any;
    if (
      index != 'phones' &&
      index != 'education' &&
      index != 'emails' &&
      index != 'urls' &&
      index != 'professional_career'
    ) {
      return dataRef?.current?.text ?? myValue?.text;
    } else {
      if (dataRef.current && dataRef.current.length) {
        return dataRef?.current[subindex as any]?.text;
      }
    }
  };
  const isChecked = () => {
    const i = subindex as any;
    if (index == 'phones' || index == 'emails') {
      if (dataRef.current) {
        return dataRef.current[i].checked;
      }
    }
  };

  useEffect(() => {
    if (dataRef.current && myValue) {
      dataRef.current = myValue;
      value();
    }
  }, [dataRef, myValue, inputText]);


  return (
    <View style={{ height: 115, justifyContent: 'center', flexDirection: 'row' }}>
      <View style={{ flexDirection: 'column', alignItems: 'center', height: "90%", width: "80%" }}>
        <View style={{ flexDirection: 'column', alignItems: 'flex-start', height: "100%", width: "100%", paddingLeft: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', height: "65%", width: "90%", borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>

            {icon === 'PersonOutlinedIcon' ?
              <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="person-outline" size={28} color="#02AF9B" />
              </View>
              :
              icon === 'FilePresentOutlinedIcon' ?
                <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                  <MaterialIcons name="file-present" size={28} color="#02AF9B" />
                </View>
                :
                icon === 'WorkOutlineOutlinedIcon' ?
                  <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                    <MaterialIcons name="work-outline" size={28} color="#02AF9B" />
                  </View>
                  :
                  icon === 'ExploreOutlinedIcon' ?
                    <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                      <MaterialIcons name="explore" size={28} color="#02AF9B" />
                    </View>
                    :
                    icon === 'translate' ?
                      <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                        <MaterialIcons name="translate" size={28} color="#02AF9B" />
                      </View>
                      :
                      icon === 'AttachFileOutlinedIcon' ?
                        <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                          <MaterialCommunityIcons name="paperclip" size={28} color="#02AF9B" />
                        </View>
                        :
                        icon === 'EmailOutlinedIcon' ?
                          <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons name="email-outline" size={28} color="#02AF9B" />
                          </View>
                          :
                          icon === 'LocalPhoneOutlinedIcon' ?
                            <View style={{ height: "100%", width: "15%", alignItems: 'center', justifyContent: 'center' }}>
                              <SimpleLineIcons name="phone" size={28} color="#02AF9B" />
                            </View>
                            :
                            null
            }

            <View style={{ height: "100%", width: "85%", alignItems: 'center', justifyContent: 'center' }}>
              <TextInput
                ref={dataRef}
                id={`${name}-input`}
                keyboardType={name === 'phones' ? "numeric" : name === 'emails' ? "email-address" : "default"}
                style={profileStyles.inputBox}
                placeholderTextColor="#000000"
                underlineColorAndroid="transparent"
                maxLength={name === 'phones' ? 10 : undefined}
                onChangeText={(text: any) => {
                  setInputText(text);
                  handleData({ name: name, text: text, currentDataRef: dataRef, key: subindex });
                }}
                value={
                  myValue && !Array.isArray(myValue)
                    ? myValue?.text
                    : myValue && myValue[subindex as number]?.text
                }
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', height: "20%", width: "90%" }}>
            <Text style={profileStyles.label}>{label}</Text>
          </View>
        </View>
      </View>


      {deleteAction === true && handleModalAlert ?
        <View style={{ flexDirection: 'column', alignItems: 'center', height: "100%", width: "20%" }}>
          <View style={{ alignItems: 'center', height: "50%", width: "100%" }}>
            <CustomSwitchGeneral
              name={name}
              subindex={subindex}
              handleSwitch={(e: any) => handleSwitch({ checked, name, subindex, currentDataRef: dataRef })}
              checked={myValue && !Array.isArray(myValue) ? myValue?.checked : myValue && myValue[subindex as number]?.checked}
            />
          </View>
          <TouchableOpacity
            style={{ alignItems: 'center', height: "50%", width: "100%" }}
            onPress={() => handleModalAlert({ index: index, subindex: "" + subindex })}
          >
            <Icon name="trash-o" size={25} color="#02AF9B" />
          </TouchableOpacity>
        </View>
        :
        <View style={{ flexDirection: 'column', alignItems: 'center', height: "100%", width: "20%" }}>{/* No se pueden borrar */}
          <CustomSwitchGeneral
            name={name}
            subindex={subindex}
            handleSwitch={(e: any) => handleSwitch({ checked, name, subindex })}
            checked={checked}
          />
        </View>
      }
    </View>
  );
};

export default ItemForm;