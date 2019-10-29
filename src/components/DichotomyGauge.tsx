import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from './BaseComponent';
import styles from './styles/DichotomyGaugeStyle';
import { Dichotomy, GaugeSettingsField } from '@/types/mbti';
import { gaugeSettings, couples } from '@/constants/Mbti';

interface Props {
  ratios: {
    [key in Dichotomy]: number;
  };
  type: string;
}

interface State {}

export default class DichotomyGauge extends BaseComponent<Props, State> {
  getPercentage(dichotomy: Dichotomy): number {
    const { ratios } = this.props;
    const couple = couples.find((couple: [Dichotomy, Dichotomy]) => couple.includes(dichotomy));

    const ratio = ratios[dichotomy] / couple.reduce((acc: number, value: Dichotomy) => {
      acc += ratios[value];
      return acc;
    }, 0);

    return Math.round(ratio * 100);
  }

  getWidth(couple: [GaugeSettingsField, GaugeSettingsField]): number {
    const highest = couple
      .concat()
      .sort((a, b) => this.getPercentage(b.dichotomy) - this.getPercentage(a.dichotomy));

    return this.getPercentage(highest[0].dichotomy);
  }

  render() {
    const { type } = this.props;

    return gaugeSettings.map((entry, index) => (
      <View style={styles.container} key={index}>
        <View>
          <Text style={styles.coupleTitle}>{this.$t(`mbti.coupleName.${entry.name}`)}</Text>
          <Text style={styles.coupleDescription}>{this.$t(`mbti.coupleDescription.${entry.name}`)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[
              styles.percentage,
              styles.percentageLeft,
              type.includes(entry.fields[0].dichotomy) && { color: entry.color },
            ]}>
              {this.getPercentage(entry.fields[0].dichotomy)}%
          </Text>
          <View style={styles.gauge}>
            <View style={
              type.includes(entry.fields[1].dichotomy) && styles.spacer
            } />
            <View style={[
              styles.value,
              type.includes(entry.fields[0].dichotomy) ? styles.valueLeft : styles.valueRight,
              { backgroundColor: entry.color },
              { width: `${this.getWidth(entry.fields)}%`},
            ]} />
          </View>
          <Text style={[
            styles.percentage,
            styles.percentageRight,
            type.includes(entry.fields[1].dichotomy) && { color: entry.color },
          ]}>
            {this.getPercentage(entry.fields[1].dichotomy)}%
          </Text>
        </View>
        <View style={[styles.row, styles.legendContainer]}>
          <Text style={[
            styles.legend,
            type.includes(entry.fields[0].dichotomy) && { color: entry.color },
          ]}>
            {this.$t(`mbti.dichotomy.${entry.fields[0].dichotomy}`)}
          </Text>
          <Text style={[
            styles.legend,
            type.includes(entry.fields[1].dichotomy) && { color: entry.color },
          ]}>
            {this.$t(`mbti.dichotomy.${entry.fields[1].dichotomy}`)}
          </Text>
        </View>
      </View>
    ));
  }
}
