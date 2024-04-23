import React, { useEffect, useState } from 'react';
import { Switch, View, Alert, Platform } from 'react-native';
import {
  GetUser,
  SendSwitchActivateCard,
  SendSwitchProfile
} from '../../../../../reactQuery/users';
import LogOut from '../../../../../hooks/logOut/LogOut';

const CustomSwitch = ({
  profile,
  handleModalAlert
}: {
  profile: boolean;
  handleModalAlert?: () => void;
}) => {
  const { data, refetch } = GetUser();
  const [switchProfile, setSwitchProfile] = useState(false);
  const [switchCard, setSwitchCard] = useState(false);
  const { logOut } = LogOut();

  const handleSwitchChange = async () => {
    refetch();
    const userId = data?.uid;
    const plan = data?.plan;

    if (profile && plan === 'standard') {
      setSwitchProfile(switchProfile);
      handleModalAlert && handleModalAlert();
    } else {
      if (userId && profile) {
        setSwitchProfile(!switchProfile);
        await SendSwitchProfile(userId, !switchProfile);
      } else {
        setSwitchCard(!switchCard);
        if (userId) {
          if (data?.isActiveByAdmin === true) {
            SendSwitchActivateCard(userId, !switchCard);
          } else {
            SendSwitchActivateCard(userId, false);
            logOut();
          }
          refetch(); // Actualizar datos después de activar/desactivar la tarjeta
        }
      }
    }
  }

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
        onValueChange={handleSwitchChange}
        trackColor={
          profile
            ? { false: '#02AF9B', true: '#02AF9B' }
            : { false: '#ABA9A6', true: '#02AF9B' }
        }
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#02AF9B"
        style={{
          transform:
            platform == 'android'
              ? [{ scaleX: 1.3 }, { scaleY: 1.3 }]
              : [{ scaleX: 1 }, { scaleY: 1 }]
        }}
      />
    </View>
  );
};

export default CustomSwitch;
