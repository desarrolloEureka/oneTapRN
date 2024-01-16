import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const isFirstTime = await AsyncStorage.getItem('firstTime');

        if (isFirstTime === null) {
          // Es la primera vez, navega a OnboardingOne
          navigation.navigate('OnboardingOne');
          // Guarda la bandera indicando que ya ha iniciado la aplicación
          await AsyncStorage.setItem('firstTime', 'false');
        } else {
          // Ya ha iniciado antes, navega a Login
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Error al verificar el primer inicio de sesión:', error);
        // Manejar el error según sea necesario
      }
    };

    // Simula un temporizador de 5 segundos antes de ejecutar la verificación
    const timer = setTimeout(() => {
      checkFirstTime();
    }, 5000);

    // Limpia el temporizador si el componente se desmonta antes de que transcurran los 5 segundos
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../images/logo_OT.png')}
          style={styles.image}
        />
      </View>
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
    width: 165,
    height: 154,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Splash;
