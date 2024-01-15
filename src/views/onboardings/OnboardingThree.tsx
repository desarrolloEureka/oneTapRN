import React from 'react';
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
    backgroundColor: '#62AD9B',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 70,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OnboardingThree;
