import { StyleSheet, StatusBar, Platform } from 'react-native';
import { Colors } from '@/constants';

export default StyleSheet.create({
  container: {
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
    height: '100%',
    paddingHorizontal: 15,
  },
  centeredView: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 48,
    fontWeight: '400',
  },
  button: {
    backgroundColor: Colors.green,
    padding: 20,
    borderRadius: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
});
