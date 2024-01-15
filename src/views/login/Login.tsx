import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleForgotPassword = () => {
    navigation.navigate('RecoveryPassword');
  };


  const handleLogin = async () => {
    try {
      if (email && password) {
        await auth().signInWithEmailAndPassword(email, password);
        const usersCollection = firestore().collection('users');
        await usersCollection.add({
          email,
          timestamp: firestore.FieldValue.serverTimestamp(),
        });

        // Navegar a la pantalla 'Main' después de iniciar sesión exitosamente
        navigation.navigate('Main');
      } else {
        Alert.alert('Error', 'Por favor, complete todos los campos.');
      }
    } catch (error:any) {
      console.error('Error al iniciar sesión:', error.message);
      Alert.alert(
        'Error',
        'Error al iniciar sesión. Verifique sus credenciales.'
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Vista de inicio de sesión */}
      <View>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#396593"
          underlineColorAndroid="transparent"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholderTextColor="#396593"
            secureTextEntry={!showPassword}
            underlineColorAndroid="transparent"
            value={password}
            onChangeText={(text) => setPassword(text)}
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
    backgroundColor: 'white',
    paddingTop: 50,
  },
  title: {
    color: '#396593',
    fontSize: 24,
    marginTop: 10,
    marginBottom: 50,
    marginLeft: 130,
  },
  input: {
    height: 52,
    width: 386,
    fontSize: 16,
    color: '#396593',
    borderBottomWidth: 1,
    borderBottomColor: '#396593',
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
    marginLeft: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
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

