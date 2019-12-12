import React from 'react';
import { Text, FlatList, ActivityIndicator } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Container, BaseComponent, TypeCategoryModal, MbtiTypeCategoryTile } from '@/components';
import styles from './styles/TypesScreenStyles';
import { MbtiTypeCategoryItem } from '@/types/mbti';
import { categories } from '@/constants/Mbti';

interface Props {
  navigation: NavigationStackProp;
}

interface State {
  categories: MbtiTypeCategoryItem[];
  isLoading: boolean;
  isModalVisible: boolean;
  selectedTypeCategory: MbtiTypeCategoryItem;
}

export default class TypesScreen extends BaseComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      categories: [],
      isLoading: true,
      isModalVisible: false,
      selectedTypeCategory: {
        name: '',
        types: [],
        aka: '',
      },
    };
    this.renderTypeCategoryItem = this.renderTypeCategoryItem.bind(this);
  }

  componentDidMount() {
    this.getTypes();
  }

  public getTypes(): void {
    let formattedCategories: MbtiTypeCategoryItem[] = Object.keys(categories).map(category => ({
      name: this.$t(`mbti.typesCategories.${category}`),
      aka: category,
      types: categories[category].map(type => ({
        aka: type,
        name: this.$t(`mbti.typeAka.${type}`),
        summary: this.$t(`mbti.summaries.${type}`)
      }))
    }));

    this.setState({ categories: formattedCategories, isLoading: false });
  }

  private renderEmptyList() {
    return (
      <Text>EMPTY</Text>
    );
  }

  public renderTypeCategoryItem({ item, index }) {
    return (
      <MbtiTypeCategoryTile item={item} key={index} onPress={() => {
        this.setState({ isModalVisible: true, selectedTypeCategory: item });
      }}/>
    );
  }

  render() {
    return (
      <Container>
        <TypeCategoryModal
          isVisible={this.state.isModalVisible}
          category={this.state.selectedTypeCategory} 
          onBackPress={() => this.setState({ isModalVisible: false })}/>
        <Text style={styles.title}>{this.$t('common.types')}</Text>
        {this.state.isLoading === true ?
          <ActivityIndicator size={'large'} color={'#000'}/>
        :
          <FlatList
            data={this.state.categories}
            ListEmptyComponent={this.renderEmptyList}
            renderItem={this.renderTypeCategoryItem} 
            keyExtractor={item => item.aka}/>
        }
      </Container>
    );
  }
}
