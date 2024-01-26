import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Terminos = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Icon name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
        <Text style={styles.title}>Términos y condiciones</Text>
        <View style={styles.titleLine} />
      </View>
      <View style={styles.background}>
        <View style={styles.innerContainer}>
          <ScrollView>
            <View style={styles.versionTextContainer}>
              <Text style={styles.versionText}>
                Aviso de privacidad La sociedad Redacol SAS, es una sociedad
                
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    paddingTop: 20
  },
  background: {
    backgroundColor: 'white', // Fondo gris
    width: 350,
    height: 585,
    borderRadius: 10, // Bordes redondeados
    overflow: 'hidden' // Asegura que el contenido dentro del fondo no sobresalga
  },
  innerContainer: {
    padding: 20
  },
  titleContainer: {
    marginBottom: 20
  },
  title: {
    color: '#396593',
    fontSize: 24
  },
  versionTextContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  versionText: {
    color: 'black',
    fontSize: 18,
    marginTop: 1,
    textAlign: 'justify'
  },
  titleLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#396593',
    marginBottom: 10,
    alignSelf: 'center',
    width: 250,
   
  },
  backButton: {
    position: 'absolute',
    left: -70,
    top: 10,
    zIndex: 1,
  },
  
});

export default Terminos;
