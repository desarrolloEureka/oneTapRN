import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {authFire} from '../../firebase/firebaseConfig';
import {StackNavigation} from '../../types/navigation';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigation>();
  const handleForgotPassword = () => {
    navigation.navigate('RecoveryPassword');
  };

  const handleLogin = async () => {
    try {
      if (email && password) {
        const res = await signInWithEmailAndPassword(authFire, email, password);
        console.log(res);
        // Navegar a la pantalla 'Main' después de iniciar sesión exitosamente
        AsyncStorage.setItem('@user', JSON.stringify(res));
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Por favor, completa todos los campos.');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error to login:', error.message);
        Alert.alert(
          'Error',
          'Error al iniciar sesión. Verifica tus credenciales.'
        );
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <ScrollView style={{flex:1}}> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.container}>
          {/* Vista de inicio de sesión */}
          <View>
            <Text style={styles.title}>Iniciar Sesión</Text>

            {/* Línea debajo del título */}
            <View style={styles.titleLine} />

            <Text style={styles.label}>Correo Electrónico</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#396593"
              underlineColorAndroid="transparent"
              value={email}
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}
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
              style={styles.forgotPassword}
              onPress={handleForgotPassword}>
              <Text>Recuperar Contraseña</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: -200
  },
  title: {
    color: '#396593',
    fontSize: 24,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 130
  },
  titleLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#396593',
    marginBottom: 10,
    alignSelf: 'center',
    width: 150,
    marginLeft: 38
  },
  input: {
    height: 52,
    width: 366, // Ajustado para que sea un poco más corto
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
    marginRight: 240
  },
  button: {
    width: 265,
    height: 45,
    backgroundColor: '#02AF9B',
    marginLeft: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 140,
    marginBottom: -140
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
  },
  forgotPassword: {
    marginLeft: 20,
    marginBottom: 20
  }
});

export default Login;
