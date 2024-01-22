import {StyleSheet} from 'react-native';

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 103
  },
  imageContainer: {
    width: 165,
    height: 154,
    marginTop: 10
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});
