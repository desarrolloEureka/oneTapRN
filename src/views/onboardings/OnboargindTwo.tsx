import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingTwo = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    // Navegar a la pantalla OnboardingThree
    navigation.navigate('OnboardingThree');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/onboarding_2.png')}
        style={styles.image}
      />
      <View style={styles.overlayTextContainer}>
        <Text style={styles.overlayText}>Edita tus datos</Text>
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
    marginTop: 200,
  },
  overlayText: {
    fontSize: 24,
    color: 'white',
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

export default OnboardingTwo;
