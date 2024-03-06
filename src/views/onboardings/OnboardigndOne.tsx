import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { StackNavigation } from '../../types/navigation';

const OnboardingOne = () => {
  const navigation = useNavigation<StackNavigation>();

  const handleNextPress = () => {
    navigation.navigate('OnboardingTwo');
  };

  const handlePressOmit = () => {
    navigation.navigate('OnboardingInicioSesion');
  };

  return (
    <SafeAreaView>
      <View style={{ height: "100%", width: "100%" }}>
        <Image
          resizeMode='cover'
          source={require('../../images/onboarding_1.png')}
          style={{ width: "100%" }}
        />
      </View>
      <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
        <View style={{ height: "65%", width: "100%", alignItems: 'flex-end' }}>
          <TouchableOpacity style={{ height: "12%", width: "25%", justifyContent: 'center', alignItems: 'center' }} onPress={handlePressOmit}>
            <Text style={{ fontSize: 15, color: 'black' }}>Omitir</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "35%", width: "100%", alignItems: 'center' }}>
          {/*  <View style={{ height: "10%", width: "90%", justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}></Text>
          </View> */}
          <View style={{ height: "50%", width: "90%", justifyContent: 'flex-start', paddingTop: 2 }}>
            <Text style={{ fontSize: 16, color: 'black' }}>Dile adiós a las tarjetas de presentación en papel y dale la bienvenida a One Tap, la tarjeta de presentación digital que está revolucionando la forma en que compartes tu información.</Text>
          </View>
          <View style={{ height: "50%", width: "90%", justifyContent: 'flex-start', alignItems: 'center', paddingTop: 15 }}>
            <TouchableOpacity style={{ height: "40%", width: "90%", backgroundColor: '#02AF9B', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }} onPress={handleNextPress}>
              <Text style={{ color: 'white', fontSize: 16 }}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView >
  );
};

export default OnboardingOne;