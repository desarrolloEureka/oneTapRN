import { EducationSubIndexDataForm, ItemFormParams } from '../../../../../types/profile';
import { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { profileStyles } from '../../../styles/profileStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomSwitchGeneral from './CustomSwitchGeneral';

const FormUrl = ({
  label,
  name,
  handleSwitch,
  handleData,
  checked,
  deleteAction,
  handleModalAlert,
  myValue,
  index,
  subindex,
  withCheck,
  subLabel,
}: ItemFormParams) => {
  const dataRef = useRef<any>(null);
  const [inputText, setInputText] = useState('');

  const value = () => {
    const i = subindex as any;
    if (dataRef.current && typeof dataRef.current === 'object') {
      if (dataRef.current[i]) {
        if (subLabel) {
          return dataRef.current[i][subLabel];
        }
      }
    }
  };

  const isChecked = () => {
    const i = subindex as any;
    if (index == 'urls') {
      if (dataRef.current) {
        return dataRef?.current[i]?.checked;
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
    <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      <View style={{ height: "100%", width: "75%", alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>

        {withCheck ?
          <>
            <View style={{ height: "100%", width: "11%", alignItems: 'flex-start', justifyContent: 'center' }}>
              <FontAwesome5 name="pencil-alt" size={21} color="#02AF9B" />
            </View>
            <View style={{ height: "100%", width: "23%", alignItems: 'flex-start', justifyContent: 'center' }}>
              <Text style={{ color: "black" }}>{label}</Text>
            </View>
          </>
          :
          <View style={{ height: "100%", width: "40%", alignItems: 'flex-start', justifyContent: 'center' }}>
            <Text style={{ color: "black" }}>{label}</Text>
          </View>
        }

        <View style={{ height: "100%", width: withCheck ? "61%" : "54%", alignItems: 'center', justifyContent: 'center' }}>
          <TextInput
            ref={dataRef}
            style={profileStyles.inputBox}
            placeholderTextColor="#000000"
            underlineColorAndroid="transparent"
            onChangeText={(text: any) => {
              setInputText(text);
              handleData({
                name: name,
                text: text,
                currentDataRef: dataRef,
                key: subindex,
                subindex: subLabel as EducationSubIndexDataForm,
              });
            }}
            value={
              myValue && subLabel && Array.isArray(myValue) && myValue[subindex as number] && myValue[subindex as number][subLabel]
            }
          />
        </View>

        <View style={{ height: "100%", width: "7%", alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, color: "black" }}>
            {myValue && subLabel && subLabel === 'url' && Array.isArray(myValue) && myValue[subindex as number] && myValue[subindex as number][subLabel] && myValue[subindex as number][subLabel].length > 15 ? ' ...' : null}
          </Text>
        </View>

      </View>
      <View style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center' }}>

        {withCheck ? (
          <CustomSwitchGeneral
            name={name}
            subindex={subindex}
            handleSwitch={(e: any) => handleSwitch({
              checked, name, subindex, currentDataRef: dataRef,
            })}
            checked={
              myValue && subLabel && Array.isArray(myValue) && myValue[subindex as number]?.checked
            }
          />
        ) : (
          deleteAction === true && handleModalAlert ?
            (
              <TouchableOpacity
                style={{ alignItems: 'center', height: "50%", width: "100%" }}
                onPress={() => handleModalAlert({ index: index, subindex: "" + subindex })}
              >
                <Icon name="trash-o" size={25} color="#02AF9B" />
              </TouchableOpacity>
            )
            :
            (
              null
            )
        )}
      </View>
    </View>
  );
};

export default FormUrl;