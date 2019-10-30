import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '@/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  round: {
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rounded: {
    borderRadius: 100,
  },
  size1: {
    width: 24,
    height: 24,
  },
  size1Inner: {
    width: 18,
    height: 18,
  },
  size2: {
    width: 33,
    height: 33,
  },
  size2Inner: {
    width: 27,
    height: 27,
  },
  size3: {
    width: 42,
    height: 42,
  },
  size3Inner: {
    width: 36,
    height: 36,
  },
});
