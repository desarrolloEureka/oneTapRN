import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

const AcercaDe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Acerca de ONETAP</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../../images/logoName.png')} style={styles.image} />
      </View>

      <View style={styles.versionTextContainer}>
        <Text style={styles.versionText}>One Tap Version 1.0</Text>
        <Text style={styles.versionText}>2023-10-25</Text>
        <Text style={styles.versionText}>Todos los derechos reservados</Text>
        <Text style={styles.versionText}>ONETAP</Text>
        <Text style={styles.versionText}>POWERED BY:</Text>
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
    paddingTop: 20, // Ajusta el valor según sea necesario
  },
  titleContainer: {
    marginTop: -150,
    marginBottom:100, // Ajusta el valor según sea necesario
  },
  title: {
    color: '#396593',
    fontSize: 24,
  },
  imageContainer: {
    width: 152,
    height: 127,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  versionTextContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  versionText: {
    color: '#black',
    fontSize: 18,
    marginTop: 20, // Ajusta el valor según sea necesario
  },
});

export default AcercaDe;