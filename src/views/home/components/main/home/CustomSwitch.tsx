import React, { useEffect, useState } from 'react';
import { Switch, View, Alert } from 'react-native';
import { GetUser, SendSwitchActivateCard, SendSwitchProfile } from '../../../../../reactQuery/users';

const CustomSwitch = ({ profile, handleModalAlert }: { profile: boolean; handleModalAlert?: () => void; }) => {
    const { data } = GetUser();
    const [switchProfile, setSwitchProfile] = useState(false);
    const [switchCard, setSwitchCard] = useState(false);

    const handleSwitchChange = async () => {
        const userId = data?.uid;
        const plan = data?.plan;

        if (userId) {
            if (profile && plan === 'basic') {
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
        Alert.alert(
            'Alerta',
            "Su perfil no se va a mostrar",
            [{ text: 'Cancelar' },
            { text: 'OK', onPress: handleSwitchChange }],
        );
    };

    useEffect(() => {
        if (data) {
            if (profile) {
                setSwitchProfile(data?.switch_profile)
            } else {
                setSwitchCard(data?.switch_activateCard);
            }
        }
    }, [data, profile]);

    return (
        <View>
            <Switch
                value={profile ? switchProfile : switchCard}
                onValueChange={!profile ? !switchCard ? handleSwitchChange : handleSwitchToggle1 : handleSwitchChange}
                trackColor={profile ? { false: '#02AF9B', true: '#02AF9B' } : { false: '#ABA9A6', true: '#02AF9B' }}
                thumbColor={'#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
            />
        </View>
    );
};

export default CustomSwitch;