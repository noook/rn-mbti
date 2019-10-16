import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Metrics, Colors } from '@/constants';

export default StyleSheet.create({
  container: {
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
    height: "100%"
  }
});