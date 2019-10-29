import { StyleSheet, StatusBar, Platform } from 'react-native';
import { Colors } from '@/constants';

export default StyleSheet.create({
  container: {
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
    height: '100%',
    marginHorizontal: 15,
  },
  centeredView: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustration: {
    height: 200,
    alignSelf: 'center',
  },
  title: {
    marginVertical: 10,
    fontSize: 48,
    fontWeight: '400',
  },
  type: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aka: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
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
  scrollView: {
    marginHorizontal: 20,
  }
});
