import React, { useEffect, useState } from 'react';
import { Switch, View } from 'react-native';
import { GetUser, SendSwitchActivateCard, SendSwitchProfile } from '../../../../../reactQuery/users';

const CustomSwitch = ({ profile }: { profile: boolean }) => {
    const { data } = GetUser();
    const [switchProfile, setSwitchProfile] = useState(false);
    const [switchCard, setSwitchCard] = useState(false);

    const handleSwitchChange = async () => {
        const userId = data?.uid;
        if (userId) {
            if (profile) {
                setSwitchProfile(!switchProfile);
                await SendSwitchProfile(userId, !switchProfile);
            } else {
                setSwitchCard(!switchCard);
                await SendSwitchActivateCard(userId, !switchCard);
            }
        }
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
                onValueChange={handleSwitchChange}
                trackColor={{ false: '#02AF9B', true: '#02AF9B' }}
                thumbColor={'#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            />
        </View>
    );
};

export default CustomSwitch;
