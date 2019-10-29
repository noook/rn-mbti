import React, { Component } from 'react';
import { View, ViewStyle, StyleProp, Text, TouchableOpacity } from 'react-native';
import styles from './styles/IntensityPickerStyle';
import { positiveValue } from '@/helper/numbers';

interface Props {
  style?: StyleProp<ViewStyle>
  onChange: (item: IntensityPickerItem) => void;
}

interface State {
  value?: IntensityPickerItem;
}

export interface IntensityPickerItem {
  position: number;
  color: string;
}

export default class IntensityPicker extends Component<Props, State> {
  private items: IntensityPickerItem[] = [
    { position: -3, color: '#4568DC' },
    { position: -2, color: '#6A66D4' },
    { position: -1, color: '#8166CD' },
    { position: 1, color: '#9666C4' },
    { position: 2, color: '#A467BC' },
    { position: 3, color: '#B06AB3' },
  ];

  public constructor(props: Props) {
    super(props);

    this.state = {};
  }

  updateSelected(value: IntensityPickerItem) {
    this.setState({ value });
    this.props.onChange(value);
  }

  isSelected(position: number): StyleProp<ViewStyle> | null {
    if (!this.state.value) return null;
    return this.state.value.position === position ?
      styles[`size${positiveValue(position)}Inner`] :
      null;
  }

  render() {
    return (
      <View style={[this.props.style, styles.container]}>
        { this.items.map(el => (
          <TouchableOpacity
            activeOpacity={1}
            key={el.position}
            onPress={() => this.updateSelected(el)}
            hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
            style={[
              styles.round,
              { borderColor: el.color }, 
              styles[`size${positiveValue(el.position)}`],
            ]}>
            <View
              style={[
                { backgroundColor: el.color }, 
                this.isSelected(el.position),
                styles.rounded,
              ]} />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
