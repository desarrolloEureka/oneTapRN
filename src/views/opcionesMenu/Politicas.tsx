import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Politicas = () => {
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
        <Text style={styles.title}>Políticas de privacidad</Text>
        <View style={styles.titleLine} />
      </View>
      <View style={styles.background}>
        <View style={styles.innerContainer}>
          <ScrollView>
            <View style={styles.versionTextContainer}>
              <Text style={styles.versionText}>
                Política de Administración y Manejo de Datos Personales De la
               
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
    backgroundColor: 'white',
    width: 350,
    height: 585,
    borderRadius: 10,
    overflow: 'hidden'
  },
  innerContainer: {
    padding: 20
  },
  titleContainer: {
    marginBottom: 20,
    marginLeft: 50,
  },
  title: {
    color: '#396593',
    fontSize: 24
  },
  versionTextContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  titleLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#396593',
    marginBottom: 10,
    alignSelf: 'center',
    width: 250,
   
  },
  versionText: {
    color: 'black',
    fontSize: 18,
    marginTop: 1,
    textAlign: 'justify'
  },
  backButton: {
    position: 'absolute',
    left: -70,
    top: 10,
    zIndex: 1,
  },
});

export default Politicas;
