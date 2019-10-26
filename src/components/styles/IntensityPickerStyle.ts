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
    width: 22,
    height: 22,
  },
  size1Inner: {
    width: 16,
    height: 16,
  },
  size2: {
    width: 27,
    height: 27,
  },
  size2Inner: {
    width: 21,
    height: 21,
  },
  size3: {
    width: 32,
    height: 32,
  },
  size3Inner: {
    width: 26,
    height: 26,
  },
});
