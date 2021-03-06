import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centeredView: {
    alignItems: 'center',
    width: '100%',
  },
  scrollView: {
    flexGrow: 1,
    width: '100%',
  },
  scrollViewContent: {
    paddingBottom: 15,
  },
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
  questionProgress: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 5,
    width: '100%',
  },
});
