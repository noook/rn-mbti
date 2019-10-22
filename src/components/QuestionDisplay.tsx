import React, { Component } from 'react';
import { Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Container from './Container';

interface Props {
  navigation: NavigationStackProp
}

interface State {}

export default class QuestionDisplay extends Component<Props, State> {
  render() {
    return (
      <Container>
        <Text>Plop</Text>
      </Container>
    );
  }
}