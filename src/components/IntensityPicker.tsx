import React, { Component } from 'react';
import { View, ViewStyle, StyleProp, Text, TouchableOpacity, GestureResponderEvent, StyleSheetProperties } from 'react-native';
import styles from './styles/IntensityPickerStyle';

interface Props {
  style?: StyleProp<ViewStyle>
}

interface State {
  selected?: number;
}

export default class IntensityPicker extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      selected: undefined,
    };
  }

  private items = [
    { position: -3, color: '#4568DC' },
    { position: -2, color: '#6A66D4' },
    { position: -1, color: '#8166CD' },
    { position: 1, color: '#9666C4' },
    { position: 2, color: '#A467BC' },
    { position: 3, color: '#B06AB3' },
  ];

  positive(num: number): number {
    return Math.sqrt(Math.pow(num, 2));
  }

  updateSelected(selected: number) {
    this.setState({ selected });
  }

  isSelected(position: number): StyleProp<ViewStyle> | null {
    return this.state.selected === position ? styles[`size${this.positive(position)}Inner`] : null;
  }

  render() {
    return (
      <View style={[this.props.style, styles.container]}>
        { this.items.map(el => (
          <TouchableOpacity
            activeOpacity={1}
            key={el.position}
            onPress={() => this.updateSelected(el.position)}
            style={[
              styles.round,
              { borderColor: el.color}, 
              styles[`size${this.positive(el.position)}`],
            ]}>
            <View
              style={[
                { backgroundColor: el.color}, 
                this.isSelected(el.position),
                styles.rounded,
              ]} />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
