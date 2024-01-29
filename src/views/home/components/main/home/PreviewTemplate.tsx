import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const PreviewTemplate = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.imageContainer}>

      <View style={{ height: 80, width: "100%" }}>
        <TouchableOpacity style={{ height: "100%", width: "18%", alignItems: 'center', justifyContent: 'center' }} onPress={handleBackPress}>
          <Icon name="arrow-back-ios" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Image source={require('src/images/social.png')} style={styles.image} />
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
  imageContainer: {
    width: 420,
    height: 750,
    marginTop: 10,
    alignItems: 'center'
  },
  image: {
    width: '80%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default PreviewTemplate;