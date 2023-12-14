import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  head: {
    height: 150,
    width: '100%'
  },
  body: {
    height: 400
  },
  titleBody: {
    fontSize: 20,
    fontWeight: '700'
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
