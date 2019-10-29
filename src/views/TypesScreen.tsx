import React from 'react';
import { Text, FlatList, ActivityIndicator, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Container, BaseComponent, MbtiTypeTile, TypeModal } from '@/components';
import styles from './styles/TypesScreenStyles';
import { MbtiTypeItem } from '@/types/mbti';
import { types } from '@/constants/Mbti';

interface Props {
  navigation: NavigationStackProp;
}

interface State {
  types: MbtiTypeItem[];
  isLoading: boolean;
  isModalVisible: boolean;
  selectedType: MbtiTypeItem;
}

export default class TypesScreen extends BaseComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      types: [],
      isLoading: true,
      isModalVisible: false,
      selectedType: {
        aka: '',
        name: '',
        summary: ''
      }
    };
    this.renderTypeItem = this.renderTypeItem.bind(this);
  }

  componentDidMount() {
    this.getTypes();
  }

  public getTypes(): void {
    let formattedTypes: MbtiTypeItem[] = [];

    types.forEach(type => {
      formattedTypes.push({
        aka: type,
        name: this.$t(`mbti.typeAka.${type}`),
        summary: this.$t(`mbti.summaries.${type}`),
      });
    });

    this.setState({ types: formattedTypes, isLoading: false });
  }

  private renderEmptyList() {
    return (
      <Text>EMPTY</Text>
    );
  }

  public renderTypeItem({ item, index }) {
    return (
      <MbtiTypeTile item={item} key={index} onPress={() => {
        this.setState({ isModalVisible: true, selectedType: item });
      }}/>
    );
  }

  render() {
    return (
      <Container>
        <TypeModal
          isVisible={this.state.isModalVisible}
          type={this.state.selectedType}
          onBackPress={() => this.setState({ isModalVisible: false })}
        />
        <Text style={styles.title}>{this.$t('common.types')}</Text>
        {this.state.isLoading === true ?
          <ActivityIndicator size={'large'} color={'#000'}/>
        :
          <FlatList
            data={this.state.types}
            ListEmptyComponent={this.renderEmptyList}
            renderItem={this.renderTypeItem} 
            keyExtractor={item => item.aka}/>
        }
      </Container>
    );
  }
}
