import React, {useEffect, useState} from 'react';
import {Switch, View, Alert, Platform} from 'react-native';
import {
  GetUser,
  SendSwitchActivateCard,
  SendSwitchProfile
} from '../../../../../reactQuery/users';

const CustomSwitch = ({
  profile,
  handleModalAlert
}: {
  profile: boolean;
  handleModalAlert?: () => void;
}) => {
  const {data} = GetUser();
  const [switchProfile, setSwitchProfile] = useState(false);
  const [switchCard, setSwitchCard] = useState(false);

  const handleSwitchChange = async () => {
    const userId = data?.uid;
    const plan = data?.plan;
    if (userId) {
      if (profile && plan === 'standard') {
        setSwitchProfile(switchProfile);
        handleModalAlert && handleModalAlert();
      } else {
        if (profile) {
          setSwitchProfile(!switchProfile);
          await SendSwitchProfile(userId, !switchProfile);
        } else {
          setSwitchCard(!switchCard);
          await SendSwitchActivateCard(userId, !switchCard);
        }
      }
    }
  };

  const handleSwitchToggle1 = () => {
    setSwitchCard(!switchCard);
    Alert.alert('Alerta', 'Su perfil no se va a mostrar', [
      {text: 'Cancelar', onPress: () => setSwitchCard(true)},
      {text: 'OK', onPress: handleSwitchChange}
    ]);
  };

  useEffect(() => {
    if (data) {
      if (profile) {
        setSwitchProfile(data?.switch_profile);
      } else {
        setSwitchCard(data?.switch_activateCard);
      }
    }
  }, [data, profile]);

  const platform = Platform.OS;

  return (
    <View>
      <Switch
        value={profile ? switchProfile : switchCard}
        onValueChange={
          !profile
            ? !switchCard
              ? handleSwitchChange
              : handleSwitchToggle1
            : handleSwitchChange
        }
        trackColor={
          profile
            ? {false: '#02AF9B', true: '#02AF9B'}
            : {false: '#ABA9A6', true: '#02AF9B'}
        }
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#02AF9B"
        style={{
          transform:
            platform == 'android'
              ? [{scaleX: 1.3}, {scaleY: 1.3}]
              : [{scaleX: 1}, {scaleY: 1}]
        }}
      />
    </View>
  );
};

export default CustomSwitch;
