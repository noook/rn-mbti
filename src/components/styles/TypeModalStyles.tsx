import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '@/constants';

export default StyleSheet.create({
  modal: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    margin: 0,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  modalContent: {
    width: '100%',
    height: '100%',
    paddingTop: Metrics.isIphoneX ? 44 : 0,  
  },

  typeAka: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  typeTitle: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 20
  },
  
  typeInfo: {
    width: '100%',
  },

  typeImage: {
    width: '75%',
    height: '100%',
    alignSelf: 'center'
  },

  typeSummary: {
    fontSize: 14,
  },

  backButton: {

  },

  backButtonText: {
    fontSize: 40
  }
});