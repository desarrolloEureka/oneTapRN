import { useQueryClient } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../types/navigation';

const useLogOut = () => {
  const queryClient = useQueryClient();
  const navigation = useNavigation<StackNavigation>();

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('@user');
      await AsyncStorage.clear(); // Borra todos los datos de AsyncStorage
      await queryClient.clear(); // Borra todos los datos de react-query
      navigation.navigate('Login'); // Navega a la pantalla de inicio de sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return { logOut };
};

export default useLogOut;
