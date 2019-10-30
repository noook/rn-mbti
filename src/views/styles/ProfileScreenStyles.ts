import { StyleSheet, StatusBar, Platform } from 'react-native';
import { Colors, Metrics } from '@/constants';

export default StyleSheet.create({
  container: {
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
    height: '100%',
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
  },

  summaryTitle: {
    fontSize: 24,
    fontWeight: '400',
    marginTop: 15,
  },

  summaryParagraph: {
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 20,
    textAlign: 'justify',
  },

  shareButton: {
    position: 'absolute',
    bottom: 0,
    right: Metrics.screenWidth * 0.10,
    width: Metrics.screenWidth * 0.15,
    height: Metrics.screenWidth * 0.15,
    backgroundColor: 'lightgray',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  shareButtonIcon: {
    fontSize: 21,
    color: '#fff',
  },
});
