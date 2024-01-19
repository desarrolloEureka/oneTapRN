import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { resetPasswordFirebase } from '../../../../firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

const RecoveryPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleNextPress = async () => {
    try {
      await resetPasswordFirebase(email);
      Alert.alert(
        'Éxito',
        'Si el correo existe en nuestra base de datos, un email será entregado para reestablecer tu contraseña'
      );
    } catch (error) {
      Alert.alert(
        'Error',
        'Hubo un problema al intentar reiniciar la contraseña. Por favor, inténtalo de nuevo.'
      );
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#e8e8e8', flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <Icon name="arrow-back-ios" size={27} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.heading}>Recuperar Contraseña</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              placeholder="Correo Electrónico"
              placeholderTextColor="white"
              underlineColorAndroid="transparent"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        {email != '' ?
          <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
          :
          <View style={styles.button}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </View>
        }

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: '8%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  contentContainer: {
    height: '77%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    height: '15%',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  container: {
    paddingTop: 2,
    height: "85%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    height: '25%',
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  footerContainer: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#396593',
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#396593"
  },
  label: {
    fontFamily: 'Open Sans',
    fontSize: 15,
    fontWeight: '400',
    color: '#008F9E',
  },
  input: {
    height: 52,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#008F9E',
    color: '#030124',
    fontFamily: 'Open Sans',
    fontSize: 17,
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#02AF9B',
    height: '45%',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: '#000',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 19,
    letterSpacing: 0.08,
    textAlign: 'left',
  },
});

export default RecoveryPassword;