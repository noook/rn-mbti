import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen, ProfileScreen, TypesScreen } from '@/views';
import { TabBar } from '@/components';
import HomeStack from './HomeNavigator';

export default createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    params: {
      icon: "home"
    }
  },
  Types: {
    screen: TypesScreen,
    params: {
      icon: "list"
    }
  },
  Profile: {
    screen: ProfileScreen,
    params: {
      icon: "user"
    }
  },
},{
  initialRouteName: 'Home',
  tabBarComponent: TabBar,
});