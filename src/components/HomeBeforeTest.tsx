import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Container from './Container';
import styles from './styles/HomeBeforeTestStyle';
import BaseComponent from './BaseComponent';

interface Props {
  navigation: NavigationStackProp<{
    onTestCompleted: () => void;
  }>;
}

interface State {}

export default class HomeBeforeTest extends BaseComponent<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.title}>{this.$t('common.home')}</Text>
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.goToDisplayQuestion()}>
            <Text style={styles.buttonText}>
              {this.$t('common.startTheTest')}
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }

  goToDisplayQuestion() {
    this.props.navigation.navigate('QuestionDisplay');
  }
}
