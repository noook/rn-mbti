import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import ProgressBar from './ProgressBar';
import Container from './Container';
import { IntensityPickerItem } from './IntensityPicker';
import styles from './styles/QuestionDisplayStyles';
import { questions } from '@/resources/questions.json';
import { MbtiQuestion, Dichotomy, MbtiResults, MbtiTestQuestion, SelectedIntensityPicker } from '@/types/mbti';
import { positiveValue } from '@/helper/numbers';
import { initResults } from '@/helper/mbti';
import { shuffle } from '@/helper/utils';
import BaseComponent from './BaseComponent';
import StorageHelper from '@/helper/storage';
import { couples } from '@/constants/Mbti';
import QuestionGroup from './QuestionGroup';

interface Props {}

interface State {
  answers: {
    [key: number]: SelectedIntensityPicker;
  };
  set: MbtiTestQuestion[];
}

export default class QuestionDisplay extends BaseComponent<NavigationStackScreenProps<{}, Props>, State> {
  // Prepares and indexes questions
  private questions: MbtiTestQuestion[] = shuffle<[MbtiQuestion, MbtiQuestion][]>(questions)
    .map((questions: [MbtiQuestion, MbtiQuestion][], index: number) => ({
      step: index + 1,
      questions,
    }));

  private testLength: number = this.questions.length;
  private scrollViewRef: ScrollView;

  public constructor(props: NavigationStackScreenProps<{}, Props>) {
    super(props);

    this.state = {
      answers: {},
      set: this.questions.splice(0, 4),
    };
  }

  progress(): number {
    return (this.testLength - this.questions.length) / this.testLength;
  }

  render() {
    return (
      <Container style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          ref={ref => { this.scrollViewRef = ref }}
          contentContainerStyle={[styles.centeredView, styles.scrollViewContent]}>
          { this.state.set.map((el: MbtiTestQuestion) => (
            <QuestionGroup
              key={el.step}
              onSelect={selected => this.onSelect(el, selected)}
              questions={el.questions}
              selected={this.state.answers[el.step]} />
          )) }
          <Button
            disabled={this.buttonDisabled()}
            title={this.$t('common.next')}
            onPress={() => this.nextQuestion()} />
        </ScrollView>
        <ProgressBar progress={this.progress()} />
      </Container>
    );
  }

  onSelect(el: MbtiTestQuestion, selected: IntensityPickerItem) {
    const { answers } = this.state;
    const letter: Dichotomy = el.questions
      .concat() // Copy of array to prevent mutation
      .sort(() => -1 * selected.position)
      .shift().value as Dichotomy;

    answers[el.step] = {
      ...selected,
      letter,
    };
    this.setState({ answers });
  }

  // Checks if all questions have an answer
  buttonDisabled() {
    const { answers, set } = this.state;
    return !set.every((el: MbtiTestQuestion) => !!answers[el.step]);
  }

  nextQuestion() {
    if (!this.questions.length) {
      return this.endTest();
    }
    this.setState({ set: this.questions.splice(0, 4) });
    this.scrollViewRef.scrollTo({ x: 0, y: 0, animated: true });
  }

  async endTest() {
    const { answers } = this.state; 
    const ratios: MbtiResults = initResults();
    let type: string = '';

    Object.values(answers).forEach((answer: SelectedIntensityPicker) => {
      ratios[answer.letter] += positiveValue(answer.position);
    });

    [...couples].forEach((couple: [Dichotomy, Dichotomy]) => {
      type += couple.sort((a: Dichotomy, b: Dichotomy) => ratios[b] - ratios[a])[0];
    });

    await StorageHelper.setItem('userType', JSON.stringify({ type, ratios }));

    this.props.navigation.popToTop();
    this.props.navigation.navigate('Profile');
  }
}
