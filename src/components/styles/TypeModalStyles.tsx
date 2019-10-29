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
    textAlign: 'center',
  },

  typeTitle: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  
  typeInfo: {
    width: '100%',
  },

  typeImage: {
    height: 200,
    marginVertical: 20,
    alignSelf: 'center'
  },

  typeSummary: {
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 20,
    textAlign: 'justify',
  },

  backButton: {

  },

  backButtonText: {
    fontSize: 40
  }
});