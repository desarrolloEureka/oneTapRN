import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
    marginTop: 10,
  },
  button: {
    width: 265,
    height: 45,
    borderRadius: 100,
    backgroundColor: '#62AD9B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PasswordChanged;
