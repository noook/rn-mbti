import React, { Component } from 'react';
import { Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Container from '@/components/Container';

interface Props {
  navigation: NavigationStackProp;
}

interface State {}

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Text>hey</Text>
      </Container>
    );
  }
}
