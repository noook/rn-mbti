import { createStackNavigator } from 'react-navigation-stack';
import { HomeBeforeTest, QuestionDisplay } from '@/components';
import { createAppContainer } from 'react-navigation';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeBeforeTest,
    navigationOptions: {
      header: null,
    }
  },
},{
  initialRouteName: 'Home',
});

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        header: null,
      },
    },
    QuestionDisplay: {
      screen: QuestionDisplay,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(RootStack);
