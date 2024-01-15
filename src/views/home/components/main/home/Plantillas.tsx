import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native';

const Plantillas = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
                    source={require('src/images/selecPlantilla.png')}
                    style={styles.image}
                  />
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
    paddingTop: 20 // Ajusta el valor según sea necesario
  },

  imageContainer: {
    width: 334,
    height: 529,
    marginTop: 10
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});

export default Plantillas;
