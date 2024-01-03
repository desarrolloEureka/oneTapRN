import React, { useState, Dispatch, SetStateAction } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface LoginProps {
  handleNext: (event: GestureResponderEvent) => void;
  handleBack: () => void;
}

const Login: React.FC<LoginProps> = ({ handleNext, handleBack }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Iniciar Sesión</Text>
      </View>
      <Text style={styles.label}>Nombres</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#396593"
        underlineColorAndroid="transparent" // Para Android
      />
      <Text style={styles.label}>Contraseña</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholderTextColor="#396593"
          secureTextEntry={!showPassword}
          underlineColorAndroid="transparent" // Para Android
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#396593" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotPassword} onPress={handleNext}>
        <Text>Recuperar Contraseña</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Siguiente</Text>
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
    marginRight: 290,
  },
  button: {
    width: 265,
    height: 45,
    backgroundColor: '#62AD9B',
    marginTop: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end', // Alinea el componente a la derecha
    marginTop: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#396593',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 52,
    fontSize: 16,
    color: '#396593',
    paddingLeft: 10,
  },
  eyeIcon: {
    padding: 10,
  },
});

export default Login;