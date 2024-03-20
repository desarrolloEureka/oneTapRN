import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../types/navigation';

const OnboardingTwo = () => {
  const navigation = useNavigation<StackNavigation>();

  const handleNextPress = () => {
    navigation.navigate('OnboardingThree');
  };

  const handlePressOmit = () => {
    navigation.navigate('OnboardingInicioSesion');
  };

  return (
    <SafeAreaView>
      <View style={{ height: "100%", width: "100%" }}>
        <Image
          resizeMode='cover'
          source={require('../../images/onboarding_2.png')}
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

          <View style={{ height: "55%", width: "93%", justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 15.5, color: 'white' }}>Tu información siempre al día. {'\n'}Nunca más te preocupes por tener tu información desactualizada. Con One Tap, mantén tus datos siempre al día, puedes modificarlos en cualquier momento, y se actualizarán al instante tanto desde la aplicación móvil como a través del sitio web.</Text>
          </View>

          <View style={{ height: "45%", width: "100%", justifyContent: 'flex-start', alignItems: 'center', paddingTop: 5 }}>
            <TouchableOpacity style={{ height: "40%", width: "80%", backgroundColor: '#02AF9B', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }} onPress={handleNextPress}>
              <Text style={{ color: 'white', fontSize: 16 }}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView >

  );
};
export default OnboardingTwo;