import React, { Component } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import styles from './styles/ProgressBarStyles';

interface Props {
  progress: number;
  style?: StyleProp<ViewStyle>;
}

export default class ProgressBar extends Component<Props> {
  size(): string {
    return `${this.props.progress * 100}%`;
  };

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={[styles.bar, { width: this.size() }]} />
      </View>
    );
  }
}