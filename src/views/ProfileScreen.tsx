import React from 'react';
import { Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Container } from '@/components';
import styles from './styles/ProfileScreenStyles';
import StorageHelper from '@/helper/storage';
import { UserType, Dichotomy } from '@/types/mbti';
import BaseComponent from '@/components/BaseComponent';

interface Props {
  navigation: NavigationStackProp;
}

interface State {
  loaded: boolean;
  testDone: boolean,
  type: string;
  ratios: {
    [key in Dichotomy]?: number;
  }
}

/**
 * Remove later. Development purpose
 */
const mock: UserType = {
  type: 'ISTP',
  ratios: {
    E: 21,
    F: 21,
    I: 12,
    J: 9,
    N: 18,
    P: 24,
    S: 15,
    T: 12,
  },
};

export default class ProfileScreen extends BaseComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      loaded: false,
      testDone: true,
      type: '',
      ratios: {},
    }
  }

  async updateType() {
    try {
      const { type, ratios } = await StorageHelper.getItem<UserType>('userType', JSON.parse);
      this.setState({ type, ratios, loaded: true });
    } catch (e) {
      this.setState({ testDone: false, loaded: true });
    }
  }

  async componentDidMount() {
    this.updateType();
  }

  render() {
    const { type, loaded, testDone } = this.state;
    const view = (
      <Container style={styles.container}>
        <Text style={styles.title}>{this.$t('common.profile')}</Text>
        <Text>{this.$t(`mbti.typeAka.${type}`)}</Text>
        <Text>{type}</Text>
      </Container>
    );

    if (!loaded) {
      return <Text>Loading...</Text>;
    } else if (loaded && !testDone) {
      return <Text>Error go take the test you faggot</Text>
    } else {
      return view;
    }
  }
}
