import { createStackNavigator } from 'react-navigation-stack';
import { HomeBeforeTest, QuestionDisplay } from '@/components';
import { createAppContainer } from 'react-navigation';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeBeforeTest,
  },
  QuestionDisplay: {
    screen: QuestionDisplay,
  },
},{
  defaultNavigationOptions: {
    header: null,
  },
  initialRouteName: 'Home',
  mode: 'modal',
  headerMode: 'none',
});

export default HomeStack;
