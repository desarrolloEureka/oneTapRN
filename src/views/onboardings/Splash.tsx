import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Simula un temporizador de 5 segundos antes de navegar a la siguiente pantalla
    const timer = setTimeout(() => {
      // Reemplaza 'OnboardingOne' con el nombre correcto de tu componente
      navigation.navigate('OnboardingOne');
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
