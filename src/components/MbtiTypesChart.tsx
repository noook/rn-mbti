import React from 'react';
import { Text, Dimensions, ScrollView, View } from 'react-native';
import { BarChart, BarChartProps } from 'react-native-chart-kit';
import BaseComponent from './BaseComponent';
import { types } from '@/constants/Mbti';
import styles from './styles/MbtiTypesChartStyle';

interface Props {}

interface State {
  chartProps: BarChartProps;
  count: number;
}

export default class MbtiTypesChart extends BaseComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    let count = 0;

    this.state = {
      chartProps: {
        data: {
          labels: types,
          datasets: [
            {
              data: types.map(() => {
                const quantity = Math.floor(Math.random() * 100);
                count += quantity;
                return quantity;
              }),
              color: (alpha: number) => '#f00',
              strokeWidth: 1,
            }
          ]
        },
        width: Dimensions.get('window').width * 2,
        height: 220,
        yAxisLabel: '',
        yAxisSuffix: '',
        chartConfig: {
          decimalPlaces: 0,
          backgroundGradientFrom: "#3C9294",
          backgroundGradientTo: "#3C9294",
          barPercentage: .5,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
          }
        },
      },
      count: count,
    }
  }
  render() {
    const { chartProps } = this.state;
    return (
      <View>
        <Text style={styles.chartTitle}>Population ({this.state.count} personnes)</Text>
        <ScrollView style={styles.scrollView} horizontal>
          <BarChart { ...chartProps } />
        </ScrollView>
      </View>
    )
  }
}