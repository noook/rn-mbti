import React from 'react';
import { View, Text, Animated, Easing } from 'react-native';
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

interface State {
}

interface EntryData {
  selected: Dichotomy;
  width: Animated.AnimatedValue;
  leftPercentage: number;
  rightPercentage: number;
}

export default class DichotomyGauge extends BaseComponent<Props, State> {
  private values: EntryData[];

  constructor(props: Props) {
    super(props);

    this.values = gaugeSettings.map<EntryData>(entry => {
      const dichotomies = entry.fields.map(field => field.dichotomy);
      const obj = {
        selected: this.props.type.includes(dichotomies[0]) ? dichotomies[0] : dichotomies[1],
        width: new Animated.Value(0),
        leftPercentage: this.getPercentage(entry.fields[0].dichotomy),
        rightPercentage: this.getPercentage(entry.fields[1].dichotomy),
      };

      return obj
    })

    this.state = {
      
    }
  }

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

  componentDidMount() {
    this.values.forEach(el => {
      this.animateBar(el);
    })
  }

  animateBar(bar: EntryData) {
    Animated.timing(
      bar.width,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
      }
    ).start(() => this.animateBar(bar));
  }

  render() {
    const { type } = this.props;

    return gaugeSettings.map((entry, index) => {
      const value: EntryData = this.values[index];
      const interpolation = value.width.interpolate({
        inputRange: [0, 1],
        outputRange: [0, this.getWidth(entry.fields)],
      });

      console.log({
        inputRange: [0, 1],
        outputRange: [0, this.getWidth(entry.fields)],
      })

      return (
        <View style={styles.container} key={index}>
          <View>
            <Text style={styles.coupleTitle}>{this.$t(`mbti.coupleName.${entry.name}`)}</Text>
            <Animated.Text style={styles.coupleTitle}>{interpolation}</Animated.Text>
            <Text style={styles.coupleDescription}>{this.$t(`mbti.coupleDescription.${entry.name}`)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={[
                styles.percentage,
                styles.percentageLeft,
                type.includes(entry.fields[0].dichotomy) && { color: entry.color },
              ]}>
                {value.leftPercentage}%
            </Text>
            <View style={styles.gauge}>
              <View style={
                type.includes(entry.fields[1].dichotomy) && styles.spacer
              } />
              <Animated.View style={{
                ...styles.value,
                backgroundColor: entry.color,
                width: `${interpolation}%`
              }} />
            </View>
            <Text style={[
              styles.percentage,
              styles.percentageRight,
              type.includes(entry.fields[1].dichotomy) && { color: entry.color },
            ]}>
              {value.rightPercentage}%
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
      );
    });
  }
}
