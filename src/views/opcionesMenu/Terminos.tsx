import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Terminos = () => {
  return (
    <View style={styles.container}>
     <View style={styles.titleContainer}>
            <Text style={styles.title}>Términos y condiciones</Text>
          </View>
      <View style={styles.background}>
        <View style={styles.innerContainer}>
         
           <View style={styles.versionTextContainer}>
        <Text style={styles.versionText}>Lorem input</Text>
      
      </View>
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
    paddingTop: 20,
  },
  background: {
    backgroundColor: 'white', // Fondo gris
    width: 350,
    height: 585,
    borderRadius: 10, // Bordes redondeados
    overflow: 'hidden', // Asegura que el contenido dentro del fondo no sobresalga
  },
  innerContainer: {
    padding: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    color: '#396593',
    fontSize: 24,
  },
  versionTextContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  versionText: {
    color: 'black',
    fontSize: 18,
    marginTop: 20,
  },
});

export default Terminos;