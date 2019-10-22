import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Container from './Container';
import styles from './styles/HomeBeforeTestStyle';

interface Props {
  navigation: NavigationStackProp;
}

interface State {}

export default class HomeBeforeTest extends Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <View style={styles.centeredView}>
          <TouchableOpacity style={styles.button} onPress={() => this.goToDisplayQuestion()}>
            <Text style={styles.buttonText}>Commencer le test</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }

  goToDisplayQuestion() {
    this.props.navigation.navigate('QuestionDisplay');
  }
}
