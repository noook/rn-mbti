import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import BaseComponent from './BaseComponent';
import { MbtiTypeCategoryItem } from '@/types/mbti';
import styles from './styles/MbtiTypeTileStyles';
import { categoriesPics } from '@/constants/Mbti';

interface Props {
  item: MbtiTypeCategoryItem;
  onPress: () => void;
}

interface State {

}

export default class MbtiTypeCategoryTile extends BaseComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.typeInfo}>
          <Text style={styles.typeAka}>{item.name}</Text>
        </View>
        <View style={styles.typeImageContainer}>
          <Image
            source={categoriesPics[item.aka]}
            style={styles.typeImage}
            resizeMode={'contain'} />
        </View>
      </TouchableOpacity>
    )
  }
}