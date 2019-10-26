import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '@/constants';

export default StyleSheet.create({
  tabBarItem: {
    width: '33%',
    paddingVertical: Metrics.isIphoneX ? 0 : 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  tabBarItemIcon: {
    fontSize: 17,
    color: Colors.tabBarItemColor
  },

  tabBarItemText: {
    fontSize: 10,
    color: Colors.tabBarItemColor
  },

  tabBarItemIconActive: {
    fontSize: 18,
    color: Colors.tabBarItemColorActive
  },

  tabBarItemTextActive: {
    fontSize: 11,
    color: Colors.tabBarItemColorActive
  },
});