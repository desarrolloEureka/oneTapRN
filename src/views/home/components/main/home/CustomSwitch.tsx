import React, { useEffect, useState } from 'react';
import { Switch, View, Alert, Platform } from 'react-native';
import { GetUser, SendSwitchActivateCard, SendSwitchProfile } from '../../../../../reactQuery/users';
import LogOut from '../../../../../hooks/logOut/LogOut';

const CustomSwitch = ({ profile, handleModalAlert }: { profile: boolean; handleModalAlert?: () => void; }) => {
  const { data, refetch } = GetUser();
  const [switchProfile, setSwitchProfile] = useState(false);
  const [switchCard, setSwitchCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const { logOut } = LogOut();

  const handleSwitchChange = async () => {
    //if (!data?.uid) return;

    if (!data?.uid || loading) return; // Ignorar si ya se está cargando
    setLoading(true); // Empezar loading

    try {
      if (profile && data.plan === 'standard') {
        setSwitchProfile(switchProfile);
        handleModalAlert?.();
        return;
      }

      if (profile) {
        const updatedSwitchProfile = !switchProfile;
        setSwitchProfile(updatedSwitchProfile);

        const success = await SendSwitchProfile(data.uid, updatedSwitchProfile);
        if (!success) {
          Alert.alert('Error', 'No se pudo actualizar el perfil.');
          setSwitchProfile(!updatedSwitchProfile); // Revertir si falla
        }
      } else {
        const updatedSwitchCard = !switchCard;

        if (!updatedSwitchCard) {
          Alert.alert('Info', 'Al desactivar esta opción, tu perfil no será visible para nadie.');
        }

        setSwitchCard(updatedSwitchCard);

        const success = data.isActiveByAdmin
          ? await SendSwitchActivateCard(data.uid, updatedSwitchCard)
          : await SendSwitchActivateCard(data.uid, false);

        if (!success) {
          Alert.alert('Error', 'No se pudo activar/desactivar la tarjeta.');
          setSwitchCard(!updatedSwitchCard); // Revertir si falla
        } else if (!data.isActiveByAdmin) {
          logOut();
        }
      }
      //refetch();
    } catch (error) {
      console.error('Error', 'Ocurrió un error al procesar la solicitud.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data) {
      if (profile) {
        setSwitchProfile(data.switch_profile);
      } else {
        setSwitchCard(data.switch_activateCard);
      }
    }
  }, [data, profile]);

  const trackColor = profile
    ? { false: '#02AF9B', true: '#02AF9B' }
    : { false: '#ABA9A6', true: '#02AF9B' };

  return (
    <View>
      <Switch
        value={profile ? switchProfile : switchCard}
        onValueChange={handleSwitchChange}
        trackColor={trackColor}
        thumbColor="#f4f3f4"
        ios_backgroundColor="#02AF9B"
        style={{
          transform: [
            { scaleX: Platform.OS === 'android' ? 1.3 : 1 },
            { scaleY: Platform.OS === 'android' ? 1.3 : 1 }
          ]
        }}
      //disabled={loading}
      />
    </View>
  );
};

export default CustomSwitch;