import React, { useEffect } from 'react';
//import { useQueryClient } from 'react-query';
//import { AsyncStorage } from '@react-native-async-storage/async-storage';
//import { useNavigation } from '@react-navigation/native';

const logOut = () => {
  /* const queryClient = useQueryClient();
  const navigation = useNavigation(); */

  const logOut = async () => {
    console.log("Funcion de Cerrar Sesion....");
    /* await AsyncStorage.clear();
    queryClient.clear();
    navigation.replace('Login'); */
  };
  return { logOut };
};

export default logOut;
