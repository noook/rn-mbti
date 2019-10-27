import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import BaseComponent from './BaseComponent';
import { MbtiTypeItem } from '@/types/mbti';
import styles from './styles/MbtiTypeTileStyles';
import { pics } from '@/constants/Mbti';

interface Props {
  item: MbtiTypeItem;
  onPress: () => void;
}

interface State {

}

export default class MbtiTypeTile extends BaseComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.typeInfo}>
          <Text style={styles.typeAka}>{item.aka}</Text>
          <Text style={styles.typeTitle}>{item.name}</Text>
          <Text style={styles.typeSummary} numberOfLines={6}>{item.summary}</Text>
        </View>
        <View style={styles.typeImageContainer}>
          <Image
            source={pics[item.aka]}
            style={styles.typeImage}
            resizeMode={'contain'} />
        </View>
      </TouchableOpacity>
    )
  }
}