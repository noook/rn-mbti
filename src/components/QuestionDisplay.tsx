import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import ProgressBar from './ProgressBar';
import Container from './Container';
import IntensityPicker, { IntensityPickerItem } from './IntensityPicker';
import styles from './styles/QuestionDisplayStyles';
import { questions } from '@/resources/questions.json';
import { MbtiQuestion, Dichotomy } from '@/types/mbti';
import { positiveValue } from '@/helper/numbers';
import { initResults } from '@/helper/mbti';
import { shuffle } from '@/helper/utils';
import BaseComponent from './BaseComponent';

interface Props {
  navigation: NavigationStackProp
}

interface State {
  step: number;
  selected?: IntensityPickerItem;
  currentQuestions: [MbtiQuestion, MbtiQuestion];
  results?: {
    [key in Dichotomy]: number;
  }
}

export default class QuestionDisplay extends BaseComponent<Props, State> {

  private questions: MbtiQuestion[][] = shuffle(questions);

  public constructor(props: Props) {
    super(props);
    
    this.state = {
      currentQuestions: this.getQuestion(1),
      step: 1,
      results: initResults(),
    }
  }

  progress(): number {
    return this.state.step / this.questions.length;
  }

  render() {
    const [question1, question2] = this.state.currentQuestions;
    return (
      <Container style={styles.container}>
        <ProgressBar progress={this.progress()} />
        <Text style={styles.questionProgress}>
          {this.$t('common.questionProgress', {
            progress: `${this.state.step} / ${this.questions.length}`,
          })}
        </Text>
        <View style={styles.sentencesContainer}>
          <View style={styles.sentenceContainer}>
            <Text style={styles.sentence}>
              {question1.label[this.$translator.deviceLanguage]}
            </Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.sentenceContainer}>
            <Text style={styles.sentence}>
              {question2.label[this.$translator.deviceLanguage]}
            </Text>
          </View>
        </View>
        <IntensityPicker
          value={this.state.selected}
          style={styles.intensityPicker}
          onChange={(selected: IntensityPickerItem) => this.setState({ selected })} />
        <Button
          disabled={!this.state.selected}
          title={this.$t('common.next')}
          onPress={() => this.nextQuestion()} />
      </Container>
    );
  }

  getQuestion(step: number): [MbtiQuestion, MbtiQuestion] {
    return this.questions[step - 1] as [MbtiQuestion, MbtiQuestion];
  }

  nextQuestion() {
    const [question1, question2] = this.state.currentQuestions;
    const letter = this.state.selected.position < 0 ? question1.value : question2.value;
    const intensity = positiveValue(this.state.selected.position);
    this.state.results[letter] += intensity;
    const nextStep = this.state.step + 1;

    if (!this.getQuestion(nextStep)) {
      return this.endTest()
    }

    this.setState({
      step: nextStep,
      selected: undefined,
      currentQuestions: this.getQuestion(nextStep),
    });
  }

  endTest() {
    console.log(this.state.results); 
    // Handle Test end
  }
}