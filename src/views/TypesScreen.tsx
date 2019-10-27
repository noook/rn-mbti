import React from 'react';
import { Text, FlatList, ActivityIndicator } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Container, BaseComponent } from '@/components';
import styles from './styles/TypesScreenStyles';
import { MbtiTypeItem } from '@/types/mbti';
import MbtiTypeTile from '@/components/MbtiTypeTile';

interface Props {
  navigation: NavigationStackProp;
}

interface State {
  types: MbtiTypeItem[];
  isLoading: boolean;
}

export default class TypesScreen extends BaseComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      types: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getTypes();
  }

  public getTypes(): void {
    let allTypes: object = this.$t('mbti.typeAka');
    let typesAka: object = Object.keys(allTypes);
    let summaries: object = this.$t('mbti.summaries');
    let formattedTypes: MbtiTypeItem[] = [];

    for (var i in typesAka) {
      if (summaries.hasOwnProperty(typesAka[i])) {
        formattedTypes.push({
          name: allTypes[typesAka[i]],
          aka: typesAka[i],
          summary: summaries[typesAka[i]]
        });
      }
    }

    this.setState({ types: formattedTypes, isLoading: false });
  }

  private renderEmptyList() {
    return (
      <Text>EMPTY</Text>
    );
  }

  public renderTypeItem({ item, index }) {
    return (
      <MbtiTypeTile item={item} key={index} onPress={() => {}}/>
    );
  }

  render() {
    return (
      <Container>
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
