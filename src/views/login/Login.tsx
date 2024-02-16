import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import {StackNavigation} from '../../types/navigation';
import {LoginError} from '../../types/login';
import {GetLoginQuery} from '../../reactQuery/users';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorForm, setErrorForm] = useState<LoginError | null>(null);
  const [sendLogin, setSendLogin] = useState(false);
  const navigation = useNavigation<StackNavigation>();

  const handleForgotPassword = () => {
    navigation.navigate('RecoveryPassword');
  };

  const handleGoTerms = () => {
    navigation.navigate('Terminos');
  };

  const {data, isLoading, isRefetching} = GetLoginQuery({
    user: email,
    password,
    sendLogin
  });

  const loginHandle = async () => {
    setErrorForm(null);
    if (email && password) {
      setErrorForm(null);
      setSendLogin(true);
    } else {
      setSendLogin(false);
      if (!email) {
        setErrorForm({
          errorType: 1,
          errorMessage: 'El correo es obligatorio'
        });
      } else if (!password) {
        setErrorForm({
          errorType: 2,
          errorMessage: 'La contraseña es obligatoria'
        });
      }
    }
  };

  /*   const userIsLogged = useCallback(() => {
      console.log("sendLogin  ", sendLogin);
      console.log("data  ", data);
      console.log("isLoading  ", isLoading);
  
      if (data && data.isActive) {
        navigation.navigate('Home');
        setPassword('');
        setEmail('');
        setErrorForm(null);
      } else if (!data && isLoading) {
        setErrorForm({
          errorType: 3,
          errorMessage: "Usuario no encontrado",
        });
      }
    }, [data, isLoading, navigation, sendLogin]); */

  const userIsLogged = useCallback(() => {
    if (data && data?.isActive) {
      setErrorForm(null);
      navigation.navigate('Home');
      setPassword('');
      setEmail('');
    } else if (sendLogin) {
      setErrorForm({
        errorType: 3,
        errorMessage: 'Credenciales incorrectas. Por favor, inténtelo de nuevo.'
      });
      setTimeout(() => {
        setErrorForm(null);
        setSendLogin(false);
      }, 2000);
    }
  }, [data, navigation, sendLogin]);

  useEffect(() => {
    userIsLogged();
  }, [userIsLogged]);

  return (
    <SafeAreaView style={{backgroundColor: '#e8e8e8', flex: 1}}>
      <ScrollView>
        <View style={styles.headerContainer}></View>

        <View
          style={{
            flex: 1,
            aspectRatio: 1 / 1.3,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View style={styles.titleContainer}>
            <Text style={styles.heading}>Iniciar Sesión</Text>
          </View>
          <View style={{height: '85%', width: '100%'}}>
            <View
              style={{
                height: '20%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}>
              <View
                style={{
                  height: '100%',
                  width: '90%',
                  alignItems: 'flex-start',
                  justifyContent: 'center'
                }}>
                <Text style={styles.label}>Correo Electrónico</Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#396593"
                  underlineColorAndroid="transparent"
                  value={email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={text => setEmail(text)}
                />
              </View>
            </View>

            {errorForm?.errorType === 1 && (
              <View
                style={{
                  height: '10%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '90%',
                    alignItems: 'flex-start',
                    justifyContent: 'center'
                  }}>
                  <Text
                    style={{
                      color: 'red',
                      marginTop: 3,
                      marginRight: 70,
                      marginBottom: 12
                    }}>
                    {errorForm?.errorMessage}*
                  </Text>
                </View>
              </View>
            )}

            <View
              style={{
                height: '20%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}>
              <View
                style={{
                  height: '100%',
                  width: '90%',
                  alignItems: 'flex-start',
                  justifyContent: 'center'
                }}>
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
                    <FontAwesome
                      name={showPassword ? 'eye' : 'eye-slash'}
                      size={20}
                      color="#396593"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {errorForm?.errorType === 2 && (
              <View
                style={{
                  height: '10%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '90%',
                    alignItems: 'flex-start',
                    justifyContent: 'center'
                  }}>
                  <Text
                    style={{
                      color: 'red',
                      marginTop: 3,
                      marginRight: 70,
                      marginBottom: 12
                    }}>
                    {errorForm?.errorMessage}*
                  </Text>
                </View>
              </View>
            )}

            {errorForm?.errorType === 3 && (
              <View
                style={{
                  height: '14%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '90%',
                    alignItems: 'flex-start',
                    justifyContent: 'center'
                  }}>
                  <Text
                    style={{
                      color: 'red',
                      marginTop: 0,
                      marginRight: 30,
                      marginBottom: 4
                    }}>
                    {errorForm?.errorMessage}*
                  </Text>
                </View>
              </View>
            )}

            <View
              style={{
                height: '10%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: '90%',
                  alignItems: 'flex-start',
                  justifyContent: 'center'
                }}
                onPress={handleForgotPassword}>
                <Text style={{color: 'black'}}>Recuperar Contraseña</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: '10%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: '90%',
                  alignItems: 'flex-start',
                  justifyContent: 'center'
                }}
                onPress={handleGoTerms}>
                <Text style={{color: 'black'}}>Términos y Condiciones</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            aspectRatio: 1 / 0.4,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <TouchableOpacity style={styles.button} onPress={loginHandle}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    aspectRatio: 1 / 0.15,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 15
  },
  titleContainer: {
    height: '15%',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    color: '#396593',
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#396593'
  },
  label: {
    fontFamily: 'Open Sans',
    fontSize: 15,
    fontWeight: '400',
    color: '#008F9E'
  },
  input: {
    height: 52,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#008F9E',
    color: '#030124',
    fontFamily: 'Open Sans',
    fontSize: 17,
    fontWeight: '300'
  },
  button: {
    backgroundColor: '#02AF9B',
    height: '30%',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: '#000'
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 19,
    letterSpacing: 0.08,
    textAlign: 'left'
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
