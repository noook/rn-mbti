import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '@/constants';

export default StyleSheet.create({
  tabBarContainer: {
    width: Metrics.screenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});