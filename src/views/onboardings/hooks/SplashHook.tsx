import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StackNavigation } from '../../../types/navigation';

const SplashHook = () => {
  const navigation = useNavigation<StackNavigation>();

  const checkFirstTime = async () => {
    try {
      const isFirstTime = await AsyncStorage.getItem('firstTime');
      if (isFirstTime == null) {
        setTimeout(() => {
          navigation.push('OnboardingOne');
          AsyncStorage.setItem('firstTime', 'false');
        }, 3280);
      } else {
        const isUser = await AsyncStorage.getItem('@user');
        if (isUser) {
          const user = JSON.parse(isUser);
          if (user?.isActive) {
            navigation.push('Home');
          } else {
            navigation.push('Login');
          }
        } else {
          navigation.push('Login');
        }
      }
    } catch (error) {
      console.error('Error to validate first time session:', error);
    }
  };

  useEffect(() => {
    checkFirstTime();
  }, [navigation]);

  return {};
};

export default SplashHook;
