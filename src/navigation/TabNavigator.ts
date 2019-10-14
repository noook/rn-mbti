import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen, ProfileScreen, TypesScreen } from '@/views';

export default createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Types: {
    screen: TypesScreen
  },
  Profile: {
    screen: ProfileScreen
  },
},{
  initialRouteName: 'Home',
});