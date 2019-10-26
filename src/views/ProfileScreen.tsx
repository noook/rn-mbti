import React, { Component } from 'react';
import { Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Container } from '@/components';

interface Props {
  navigation: NavigationStackProp;
}

interface State {}

export default class ProfileScreen extends Component<Props, State> {
  render() {
    return (
      <Container>
        <Text>Profile</Text>
      </Container>
    );
  }
}
