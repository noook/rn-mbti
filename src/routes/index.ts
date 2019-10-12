import { createStackNavigator } from "react-navigation-stack"
import Home from '@/views/Home';
import Secondary from '@/views/Secondary';

const RootStack = createStackNavigator(
  {
    Home,
    Secondary,
  },
  {
    initialRouteName: 'Home',
  },
);

export default RootStack;
