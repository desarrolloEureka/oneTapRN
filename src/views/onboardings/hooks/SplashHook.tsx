import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { StackNavigation } from '../../../types/navigation';

const SplashHook = () => {
  const navigation = useNavigation<StackNavigation>();

  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const isFirstTime = await AsyncStorage.getItem('firstTime');
        const delay = Platform.OS === 'ios' ? 7200 : 3280;

        if (isFirstTime === null) {
          await AsyncStorage.setItem('firstTime', 'false');
          const timerId = setTimeout(() => navigation.replace('OnboardingOne'), delay);

          // Clean up the timeout if the component unmounts
          return () => clearTimeout(timerId);
        } else {
          const isUser = await AsyncStorage.getItem('@user');
          if (isUser) {
            const user = JSON.parse(isUser);
            navigation.replace(user?.isActive ? 'Home' : 'Login');
          } else {
            navigation.replace('Login');
          }
        }
      } catch (error) {
        console.error('Error validating first-time session:', error);
      }
    };

    checkFirstTime();
  }, [navigation]);

  return null;
};

export default SplashHook;