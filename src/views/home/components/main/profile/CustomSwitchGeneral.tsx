import React, { useRef } from 'react';
import { View, Text, Switch } from 'react-native';

const CustomSwitchGeneral = ({ handleSwitch, name, checked, subindex }: { handleSwitch: (e: any) => void; name: string; checked?: boolean; subindex?: any }) => {

  const switchRef = useRef<any>(null);

  return (
    <View style={{ height: "85%", width: "100%" }}>
      <View style={{ height: "100%", width: "100%", justifyContent: 'center', alignItems: 'center' }}>
        {name === 'all_true' &&
          <View style={{ height: "25%", width: "100%", justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: "black", fontWeight: '700' }}>Compartir Todo</Text>
          </View>
        }

        <View style={{ height: name === 'all_true' ? "45%" : "45%", width: "100%", justifyContent: 'center', alignItems: 'center' }}>
          <Switch
            ref={switchRef}
            value={checked}
            key={name}
            onValueChange={() => handleSwitch({ checked, name, subindex })}
            trackColor={{ false: '#ABA9A6', true: '#02AF9B' }}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          />
        </View>
        <View style={{ height: name === 'all_true' ? "30%" : "40%", width: "100%", justifyContent: 'center', alignItems: 'center', paddingTop: 3 }}>
          <Text style={[{ color: '#030124', fontSize: 13 }]}>
            off/on
          </Text>
        </View>
      </View>
    </View>

    /*    */
  );
};

export default CustomSwitchGeneral;