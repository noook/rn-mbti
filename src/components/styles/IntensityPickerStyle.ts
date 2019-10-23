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
    width: 20,
    height: 20,
  },
  size1Inner: {
    width: 14,
    height: 14,
  },
  size2: {
    width: 25,
    height: 25,
  },
  size2Inner: {
    width: 19,
    height: 19,
  },
  size3: {
    width: 30,
    height: 30,
  },
  size3Inner: {
    width: 24,
    height: 24,
  },
});
