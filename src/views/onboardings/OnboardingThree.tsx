
import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';

interface OnboardingThreeProps {
  handleNext: (event: GestureResponderEvent) => void;
}

const OnboardingThree: React.FC<OnboardingThreeProps> = ({ handleNext }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('images/onboarding_3.png')}
        style={styles.image}
      />
      <View style={styles.overlayTextContainer}>
        <Text style={styles.overlayText}>Lorem input</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          Siguiente
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Asegura que el posicionamiento relativo funcione
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
    marginTop: 240,
  },
  overlayText: {
    fontSize: 24,
    color: 'black',
    // Otros estilos de texto aquí
  },
  button: {
    position: 'absolute', // Posiciona el botón absolutamente
    bottom: 50, // Ajusta la posición del botón desde la parte inferior
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

export default OnboardingThree;