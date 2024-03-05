import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../types/navigation';

const OnboardingThree = () => {
  const navigation = useNavigation<StackNavigation>();

  const handleNextPress = () => {
    navigation.navigate('OnboardingInicioSesion');
  };

  return (
    <SafeAreaView>
      <View style={{ height: "100%", width: "100%" }}>
        <Image
          resizeMode='cover'
          source={require('../../images/onboarding_3.png')}
          style={{ width: "100%" }}
        />
      </View>
      <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
        <View style={{ height: "70%", width: "100%", alignItems: 'flex-end' }}>
        </View>
        <View style={{ height: "30%", width: "100%", alignItems: 'center' }}>
          <View style={{ height: "15%", width: "90%", justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}></Text>
          </View>
          <View style={{ height: "35%", width: "90%", justifyContent: 'flex-start', paddingTop: 2 }}>
            <Text style={{ fontSize: 16, color: 'black' }}>Utiliza tu perfil profesional como hoja de vida y compártela al instante.</Text>
          </View>
          <View style={{ height: "50%", width: "90%", justifyContent: 'flex-start', alignItems: 'center', paddingTop: 15 }}>
            <TouchableOpacity style={{ height: "45%", width: "90%", backgroundColor: '#02AF9B', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }} onPress={handleNextPress}>
              <Text style={{ color: 'white', fontSize: 16 }}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView >
  );
};

export default OnboardingThree;

/* import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingThree = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    // Navegar a la pantalla OnboardingInicioSesion
    navigation.navigate('OnboardingInicioSesion');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/onboarding_3.png')}
        style={styles.image}
      />
      <View style={styles.overlayTextContainer}>
        <Text style={styles.overlayText}>Lorem input</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    flex: 1,  // Asegura que la imagen se expanda para ocupar todo el espacio disponible
    resizeMode: 'cover',
  },
  overlayTextContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 240,
  },
  overlayText: {
    fontSize: 24,
    color: 'black',
    // Otros estilos de texto aquí
  },
  button: {
    position: 'absolute',
    bottom: 50,
    width: 265,
    height: 45,
    borderRadius: 100,
    backgroundColor: '#02AF9B',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 70,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OnboardingThree; */
