import React, { useCallback, useEffect } from 'react';
import { View, Image, StyleSheet, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RouteStackParamList } from '../home/components/main/Main';

const Splash = () => {
  const navigation = useNavigation<StackNavigationProp<RouteStackParamList, 'Splash'>>()
  const route = useRoute();

  useEffect(() => {
    const onBackPress = () => {

      /* const currentRoute = routes[routes.length - 1].name
      console.log('routes: ', routes); */
      const currentRoute = route.name;
      //console.log('currentRoute: ', currentRoute);
      console.log('route: ', route);

      if (currentRoute === "Home") {
        console.log("Salir");
        //BackHandler.exitApp();
        return true;
      } else {
        console.log("Else ", currentRoute);
        return false;
      }
    };
    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => subscription.remove();
  }, [navigation])

  useEffect(() => {
    const currentRoute = route.name;
    /* console.log('currentRoute: ', currentRoute);
    console.log('route: ', route); */

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
          const isUser = await AsyncStorage.getItem('@user');
          if (isUser) {
            navigation.push('Home');
          } else {
            navigation.push('Login');
          }

        }
      } catch (error) {
        console.error('Error al verificar el primer inicio de sesión:', error);
        // Manejar el error según sea necesario
      }
    };

    // Simula un temporizador de 5 segundos antes de ejecutar la verificación
    const timer = setTimeout(() => {
      checkFirstTime();
    }, 2000);

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
