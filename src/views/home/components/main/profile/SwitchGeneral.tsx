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
        <View style={{ height: "85%", width: "100%" }}>
            <View style={{ height: "100%", width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: "65%", width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                    <Switch
                        value={isSwitchOn}
                        onValueChange={handleSwitchToggle}
                        trackColor={{ false: '#02AF9B', true: '#02AF9B' }}
                        thumbColor={'#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                    />
                </View>
                <View style={{ height: "45%", width: "100%", justifyContent: 'center', alignItems: 'center', paddingTop: 3 }}>
                    <Text style={[{ color: '#030124', fontSize: 13 }]}>
                        on/off
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default SwitchGeneral;