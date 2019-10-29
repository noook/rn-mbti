import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  sentencesContainer: {
    flexDirection: 'row',
  },
  sentence: {
    textAlign: 'center',
    fontSize: 22,
  },
  separator: {
    width: 1,
    backgroundColor: '#000'
  },
  sentenceContainer: {
    flexGrow: 1,
    flexBasis: '49%',
    padding: 10,
    justifyContent: 'center',
    width: '100%',
  },
  intensityPicker: {
    width: '100%',
    marginVertical: 30,
  },
});
