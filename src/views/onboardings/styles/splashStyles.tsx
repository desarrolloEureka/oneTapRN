import { StyleSheet } from 'react-native';

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Fondo blanco para evitar parpadeos
  },
  animation: {
    width: '100%',
    height: '100%',
  },
});
