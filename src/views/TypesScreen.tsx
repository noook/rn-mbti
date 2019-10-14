import React, { Component } from 'react';
import { Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Container from '@/components/Container';

interface Props {
  navigation: NavigationStackProp;
}

interface State {}

export default class TypesScreen extends Component<Props, State> {
  render() {
    return (
      <Container>
        <Text>TypesScreen</Text>
      </Container>
    );
  }
}
