import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const RecoveryPassword = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    // Navegar a la pantalla RecoveryCode
    navigation.navigate('RecoveryCode');
  };

  const handleBackPress = () => {
    // Volver a la pantalla Login
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Icon name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Recuperar Contraseña</Text>
        <View style={styles.tabSeparator} />

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Correo</Text>
          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#CCCCCC',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    zIndex: 1,
  },
  heading: {
    color: '#0077b6',
    fontSize: 26,
    marginBottom: 20,
    marginTop: -350,
  },
  tabSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#030124',
    marginVertical: 5,
    width: '100%',
  },
  inputContainer: {
    alignItems: 'center',
  },
  label: {
    color: '#62AD9B',
    fontSize: 16,
    marginBottom: 10,
    marginRight: 300,
  },
  input: {
    height: 52,
    width: 386,
    fontSize: 16,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#0077b6',
    marginBottom: 20,
    paddingLeft: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    width: 184,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#62AD9B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RecoveryPassword;
