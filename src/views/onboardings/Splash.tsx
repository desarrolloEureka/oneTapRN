import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import SplashHook from './hooks/SplashHook';
import { splashStyles } from './styles/splashStyles';

const Splash = () => {
  SplashHook();
  return (
    <View style={splashStyles.container}>
      <LottieView
        source={require('../../images/splash_video.lottie.json')}
        autoPlay
        style={splashStyles.animation}
        resizeMode="cover"
      />
    </View>
  );
};

export default Splash;
