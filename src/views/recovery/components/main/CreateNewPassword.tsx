import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreateNewPassword = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    // Navegar a la pantalla PasswordChanged
    navigation.navigate('PasswordChanged');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Crear nueva Contraseña
        </Text>
      </View>
      <Text style={styles.label}>
        Nueva contraseña
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nueva contraseña"
        placeholderTextColor="#396593"
        underlineColorAndroid="transparent" // Para Android
      />
      <Text style={styles.label}>
        Repetir contraseña
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Repetir contraseña"
        placeholderTextColor="#396593"
        secureTextEntry={true}
        underlineColorAndroid="transparent" // Para Android
      />

      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 50,
  },
  title: {
    color: '#396593',
    fontSize: 24,
    marginTop: 10,
    marginBottom: 50,
  },
  input: {
    height: 52,
    width: 386,
    fontSize: 16,
    color: '#396593', // Color del texto
    borderBottomWidth: 1,
    borderBottomColor: '#396593', // Color de la línea
    marginBottom: 10,
    paddingLeft: 10,
  },
  label: {
    color: '#008F9E',
    marginTop: 3,
    marginRight: 250,
  },
  button: {
    width: 265,
    height: 45,
    backgroundColor: '#02AF9B',
    marginTop: 130,
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CreateNewPassword;
