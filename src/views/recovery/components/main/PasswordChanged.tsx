import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PasswordChanged = () => {
  const navigation = useNavigation();

  const handleGoToLogin = () => {
    // Navegar a la pantalla Login
    navigation.navigate('OnboardingInicioSesion');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Contraseña modificada exitosamente
        </Text>
      </View>
      <View style={styles.imageContainer}>
      <Image
                    source={require('src/images/password_change_girl.png')}
                    style={styles.image}
                  />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleGoToLogin}>
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
    backgroundColor: 'white',
    paddingTop: 103,
  },
  title: {
    color: '#396593',
    fontSize: 24,
    marginTop: -100,
  },
  button: {
    width: 265,
    height: 45,
    borderRadius: 100,
    backgroundColor: '#02AF9B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  imageContainer: {
    width: 337,
    height: 421,
    marginTop: 10
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});

export default PasswordChanged;
