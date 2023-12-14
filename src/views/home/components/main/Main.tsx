import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../../../../globalStyles/globalStyles';
import HomeHook from '../../hooks/HomeHook';
import {homeStyles} from '../../styles/homeStyles';

const Main = () => {
  const {tab, setTab} = HomeHook();

  return (
    <SafeAreaView>
      <View style={globalStyles.container}>
        <View style={homeStyles.head}>
          <Text>Head</Text>
        </View>
        <View style={homeStyles.body}>
          <Text style={homeStyles.titleBody}>Plantillas</Text>
          <View style={homeStyles.tab}>
            <TouchableOpacity onPress={() => setTab(0)}>
              <Text>Social</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTab(1)}>
              <Text>Profesional</Text>
            </TouchableOpacity>
          </View>
          <View style={homeStyles.tabContainer}>
            {tab === 0 ? <Text>contenedor</Text> : <Text>Contendedor2</Text>}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
