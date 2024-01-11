import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingOne = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    // Navegar a la pantalla OnboardingTwo
    navigation.navigate('OnboardingTwo');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/onboarding_1.png')}
        style={styles.image}
      />
      <View style={styles.overlayTextContainer}>
        <Text style={styles.overlayText}>Elige tu tarjeta y plantilla</Text>
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
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlayTextContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
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
    marginLeft: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OnboardingOne;

