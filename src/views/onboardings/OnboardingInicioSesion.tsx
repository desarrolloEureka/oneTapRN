import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingInicioSesion = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    // Navegar a la pantalla Login
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../images/logo_inicio.png')}
          style={styles.image}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      {/*  <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>¿Aún no tienes OneTap?</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 103,
  },
  imageContainer: {
    width: 216,
    height: 180,
    marginBottom: 100,
    marginTop: -100,
    alignItems: 'flex-start',
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
    backgroundColor: '#02AF9B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OnboardingInicioSesion;
