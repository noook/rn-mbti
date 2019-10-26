import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import TabNavigator from '@/navigation/TabNavigator';

export const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
