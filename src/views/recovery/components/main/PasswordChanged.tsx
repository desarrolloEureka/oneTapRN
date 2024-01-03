import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';

interface PasswordModifiedSuccessfullyProps {
  handleNext: () => void;
  handleBack: () => void;
}

const PasswordModifiedSuccessfully: React.FC<PasswordModifiedSuccessfullyProps> = ({ handleNext }) => {
  // Considera cómo gestionar la traducción en React Native (puede ser a través de una biblioteca específica)
  const dictionary = {
    passwordChangedSuccessfully: 'Contraseña modificada exitosamente',
    nextNewPassword: 'Siguiente',
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {dictionary?.passwordChangedSuccessfully}
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('images/password_change_girl.png')}
          style={styles.image}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          Volver al inicio
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Color azul agua marina
    paddingTop: 103,
  },
  title: {
    color: '#396593',
    fontSize: 24,
    marginTop: 10,
  },
  imageContainer: {
    width: 337,
    height: 421,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    width: 265,
    height: 45,
    borderRadius: 100,
    backgroundColor: '#62AD9B',
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PasswordModifiedSuccessfully;
