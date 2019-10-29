import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import TabNavigator from '@/navigation/TabNavigator';
import { StatusBar } from 'react-native';

export const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
  render() {
    return [
      <StatusBar key={0} barStyle={'dark-content'} />,
      <AppContainer key={1} />,
    ];
  }
}
