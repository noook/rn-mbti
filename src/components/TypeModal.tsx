import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { MbtiTypeItem } from '@/types/mbti';
import BaseComponent from './BaseComponent';
import styles from './styles/TypeModalStyles';
import Modal from 'react-native-modal';
import { pics } from '@/constants/Mbti';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  type: MbtiTypeItem;
  isVisible: boolean;
  onBackPress: () => void;
}

interface State { }

export default class TypeModal extends BaseComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, isVisible, onBackPress } = this.props;
    return (
      <Modal isVisible={isVisible} style={styles.modal} hasBackdrop={false}>
        <ScrollView style={styles.modalContent}>
          <TouchableOpacity onPress={onBackPress} style={styles.backButton} hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
            <Text style={styles.backButtonText}>&times;</Text>
          </TouchableOpacity>
          <View style={styles.typeInfo}>
            <Text style={styles.typeAka}>{type.aka}</Text>
            <Text style={styles.typeTitle}>{type.name}</Text>
            <Text style={styles.typeSummary}>{type.summary}</Text>
          </View>
          <Image
            source={pics[type.aka]}
            style={styles.typeImage}
            resizeMode={'contain'} />
        </ScrollView>
      </Modal>
    );
  }
}