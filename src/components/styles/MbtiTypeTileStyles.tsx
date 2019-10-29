import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Metrics, Colors } from '@/constants';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth * 0.9,
    height: Metrics.screenHeight * 0.2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 10,
  },

  typeAka: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  typeTitle: {
    color: 'grey',
    fontSize: 16,
  },
  
  typeInfo: {
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start'
  },

  typeImageContainer: {
    width: '50%',
    height: Metrics.screenHeight * 0.15,
    alignSelf: 'center',
  },

  typeImage: {
    width: '100%',
    height: '100%'
  },

  typeSummary: {
    overflow: 'hidden',
    fontSize: 14,
    textAlign: 'justify',
    maxWidth: '100%',
    marginVertical: 5,
  }
});