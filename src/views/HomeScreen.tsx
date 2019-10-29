import React, { Component } from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import StackContainer from '@/navigation/HomeNavigator';

interface Props {
  navigation: NavigationStackProp;
}

interface State {}

export default class HomeScreen extends Component<Props, State> {
  render() {
    return (
      <StackContainer />
    );
  }

  goToProfile() {
    this.props.navigation.navigate('Profile');
  }
}
