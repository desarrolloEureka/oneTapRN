import { EducationSubIndexDataForm, ItemFormParams } from '../../../../../types/profile';
import { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { profileStyles } from '../../../styles/profileStyles';
import SwitchGeneral from './SwitchGeneral';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomSwitchGeneral from './CustomSwitchGeneral';

const FormUrl = ({
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
  withCheck,
  subLabel,
}: ItemFormParams) => {
  const dataRef = useRef<any>(null);

  const value = () => {
    const i = subindex as any;
    if (dataRef.current && typeof dataRef.current === 'object') {
      if (dataRef.current[i] && typeof dataRef.current[i] === 'object') {
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
    }
  }, [dataRef, myValue]);

  return (
    <View style={{ height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      <View style={{ height: "100%", width: "75%", alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#9b9db3' }}>

        {withCheck ?
          <>
            <View style={{ height: "100%", width: "10%", alignItems: 'flex-start', justifyContent: 'center' }}>
              <Ionicons name="library-outline" size={25} color="#02AF9B" />
            </View>
            <View style={{ height: "100%", width: "30%", alignItems: 'flex-start', justifyContent: 'center' }}>
              <Text>{label}</Text>
            </View>
          </>
          :
          <View style={{ height: "100%", width: "30%", alignItems: 'flex-start', justifyContent: 'center' }}>
            <Text>{label}</Text>
          </View>
        }

        <View style={{ height: "100%", width: withCheck ? "60%" : "70%", alignItems: 'center', justifyContent: 'center' }}>
          <TextInput
            ref={dataRef}
            value={value() ?? ''}
            style={profileStyles.inputBox}
            placeholderTextColor="#000000"
            underlineColorAndroid="transparent"
            onChangeText={(text: any) => {
              handleData({
                name: name,
                text: text,
                currentDataRef: dataRef,
                key: subindex,
                subindex: subLabel as EducationSubIndexDataForm,
              });
            }}
          />
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
            checked={checked}
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