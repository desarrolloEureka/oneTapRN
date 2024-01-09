import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { profileStyles } from '../../../styles/profileStyles';
import ItemForm from './ItemForm';
import ProfileHook from './hooks/ProfileHook';
import {
    CareerDataFormValues,
    DataForm,
    DataFormValues,
    EducationDataFormValues,
    UrlDataFormValues,
    handleDataProps
} from '../../../../../types/profile';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const SwitchGeneral = ({ label }: { label?: string; }) => {

    const [isSwitchOn, setSwitchOn] = useState(false);

    const handleSwitchToggle = () => {
        setSwitchOn(!isSwitchOn);
    };

    return (
        <View style={{ height: "80%", width: "100%" }}>
            <View style={{ height: "100%", width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: "50%", width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                    <Switch
                        value={isSwitchOn}
                        onValueChange={handleSwitchToggle}
                        trackColor={{ false: '#62AD9B', true: '#62AD9B' }}
                        thumbColor={'#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    />
                </View>
                <View style={{ height: "25%", width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[{ color: '#030124' }]}>
                        on/off
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default SwitchGeneral;