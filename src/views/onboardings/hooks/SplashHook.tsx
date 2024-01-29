import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { StackNavigation } from '../../../types/navigation';

const SplashHook = () => {
  const navigation = useNavigation<StackNavigation>();

  const checkFirstTime = async () => {
    try {
      const isFirstTime = await AsyncStorage.getItem('firstTime');
      if (isFirstTime == null) {
        navigation.push('OnboardingOne');
        await AsyncStorage.setItem('firstTime', 'false');
      } else {
        const isUser = await AsyncStorage.getItem('@user');
        //console.log("isUser ", isUser);
        if (isUser) {
          navigation.push('Home');
        } else {
          navigation.push('Login');
        }
      }
    } catch (error) {
      console.error('Error to validate first time session:', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkFirstTime();
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return {};
};

export default SplashHook;
