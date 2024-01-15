import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RecoveryCode = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    // Navegar a la pantalla CreateNewPassword
    navigation.navigate('CreateNewPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Codigo de recuperacion</Text>
      <Text style={styles.description}>
        Ingresa el código de recuperación que hemos enviado a tu correo
        electrónico
      </Text>
      <Text style={styles.code}>Codigo</Text>
      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder="D1" />
        <TextInput style={styles.input} placeholder="D2" />
        <TextInput style={styles.input} placeholder="D3" />
        <TextInput style={styles.input} placeholder="D4" />
      </View>

      <Text style={styles.codeLabel}>Codigo</Text>
      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendButtonText}>
          Reenviar código de verificación
        </Text>
      </TouchableOpacity>

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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: 'white',
  },
  title: {
    color: '#396593',
    fontSize: 20,
    marginBottom: 50,
    marginTop: -310,
  },
  description: {
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
    width: 250,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
  },
  input: {
    height: 59,
    width: 43,
    fontSize: 16,
    color: 'white',
    borderRadius: 10,
    borderColor: '#008F9E',
    borderWidth: 1,
    marginVertical: 10,
    marginLeft: 5,
    paddingLeft: 10,
  },
  codeLabel: {
    color: 'white',
    marginTop: 5,
    marginLeft: 40,
  },
  resendButton: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    marginBottom: -200,
  },
  resendButtonText: {
    color: 'black',
    width: 265,
    height: 42,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    marginBottom: -330,
    backgroundColor: '#62AD9B',
    borderRadius: 120,
  },
  button: {
    width: 265,
    height: 45,
    borderRadius: 120,
    backgroundColor: '#62AD9B',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-200,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  code: {
    color: '#008F9E',
    fontSize: 15,
  },
});

export default RecoveryCode;
