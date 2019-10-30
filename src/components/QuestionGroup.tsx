import React from 'react';
import BaseComponent from './BaseComponent';
import { View, Text } from 'react-native';
import { MbtiQuestion } from '@/types/mbti';
import styles from './styles/QuestionGroupStyles';
import IntensityPicker, { IntensityPickerItem } from './IntensityPicker';

interface Props {
  questions: [MbtiQuestion, MbtiQuestion];
  selected: IntensityPickerItem;
  onSelect: (selected: IntensityPickerItem) => void;
}

interface State {
  selected?: IntensityPickerItem;
}

export default class QuestionGroup extends BaseComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      selected: undefined,
    };
  }
  render() {
    const [question1, question2] = this.props.questions;
    return (
      <View style={{ paddingVertical: 10 }}>
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
            style={styles.intensityPicker}
            onChange={(selected: IntensityPickerItem) => this.props.onSelect(selected)} />
      </View>
    );
  }
}