import React from 'react';
import {Image, View} from 'react-native';
import SplashHook from './hooks/SplashHook';
import {splashStyles} from './styles/splashStyles';

const Splash = () => {
  SplashHook();
  return (
    <View style={splashStyles.container}>
      <View style={splashStyles.imageContainer}>
        <Image
          source={require('../../images/logo_OT.png')}
          style={splashStyles.image}
        />
      </View>
    </View>
  );
};

export default Splash;
