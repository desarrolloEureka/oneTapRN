

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import RecoveryPassword from '../recovery/components/main/RecoveryPassword';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordView, setShowForgotPasswordView] = useState(false);

  const navigation = useNavigation();

  const handleForgotPassword = () => {
    setShowForgotPasswordView(true);
  };

  const handleNextAndNavigate = () => {
    if (username && password) {
      // Realiza alguna lógica adicional aquí si es necesario
      navigation.navigate('Main');
    } else {
      console.log('Por favor, complete todos los campos.');
    }
  };

  return (
    <View style={styles.container}>
      {showForgotPasswordView ? (
        <RecoveryPassword
          handleBack={() => setShowForgotPasswordView(false)}
          handleNext={() => {}}
        />
      ) : (
        // Vista de inicio de sesión
        <View>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <Text style={styles.label}>Nombres</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#396593"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <Text style={styles.label}>Contraseña</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholderTextColor="#396593"
              secureTextEntry={!showPassword}
              underlineColorAndroid="transparent"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye-slash' : 'eye'}
                size={20}
                color="#396593"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.passwordInput}
            onPress={handleForgotPassword}>
            <Text>Recuperar Contraseña</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNextAndNavigate}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 50
  },
  title: {
    color: '#396593',
    fontSize: 24,
    marginTop: 10,
    marginBottom: 50
  },
  input: {
    height: 52,
    width: 386,
    fontSize: 16,
    color: '#396593',
    borderBottomWidth: 1,
    borderBottomColor: '#396593',
    marginBottom: 10,
    paddingLeft: 10
  },
  label: {
    color: '#008F9E',
    marginTop: 3,
    marginRight: 290
  },
  button: {
    width: 265,
    height: 45,
    backgroundColor: '#62AD9B',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#396593',
    marginBottom: 10
  },
  passwordInput: {
    flex: 1,
    height: 52,
    fontSize: 16,
    color: '#396593',
    paddingLeft: 10
  },
  eyeIcon: {
    padding: 10
  }
});

export default Login;
