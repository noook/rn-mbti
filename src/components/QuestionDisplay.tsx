import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Container from './Container';
import IntensityPicker, { IntensityPickerItem } from './IntensityPicker';
import { questions } from '@/resources/questions.json';
import { MbtiQuestion } from '@/types/mbti';
import styles from './styles/QuestionDisplayStyles';

interface Props {
  navigation: NavigationStackProp
}

interface State {
  step: number;
  questions: MbtiQuestion[][];
  selected?: IntensityPickerItem;
}

export default class QuestionDisplay extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    
    this.state = {
      step: 1,
      questions,
      selected: undefined,
    }
  }

  render() {
    const [question1, question2] = this.getQuestion(this.state.step);
    return (
      <Container style={styles.container}>
        <View style={styles.sentencesContainer}>
          <View style={styles.sentenceContainer}><Text style={styles.sentence}>{question1.label.fr}</Text></View>
          <View style={styles.separator} />
          <View style={styles.sentenceContainer}><Text style={styles.sentence}>{question2.label.fr}</Text></View>
        </View>
        <IntensityPicker
          value={this.state.selected}
          style={styles.intensityPicker}
          onChange={(selected: IntensityPickerItem) => this.setState({ selected })} />
        <Button
          disabled={!this.state.selected}
          title={'Suivant'}
          onPress={() => this.nextQuestion()} />
      </Container>
    );
  }

  getQuestion(step: number): [MbtiQuestion, MbtiQuestion] {
    return this.state.questions[step - 1] as [MbtiQuestion, MbtiQuestion];
  }

  nextQuestion() {
    this.setState({
      step: this.state.step + 1,
      selected: undefined,
    });
  }
}