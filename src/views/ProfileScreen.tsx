import React, { Component } from 'react';
import { Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Container } from '@/components';
import StorageHelper from '@/helper/storage';
import { UserType, Dichotomy } from '@/types/mbti';

interface Props {
  navigation: NavigationStackProp;
}

interface State {
  loaded: boolean;
  type: string;
  ratios: {
    [key in Dichotomy]?: number;
  }
}

export default class ProfileScreen extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      loaded: false,
      type: '',
      ratios: {},
    }
  }

  async updateType() {
    try {
      const { type, ratios }  = await StorageHelper.getItem<UserType>('userType', JSON.parse);
      this.setState({ type, ratios, loaded: true });
    } catch (e) {
      console.error(e);
    }
  }

  async componentDidMount() {
    this.updateType();
  }

  render() {
    const { type, loaded } = this.state;
    const view = (
      <Container>
        <Text>Profile</Text>
        <Text>{type || 'NULL'}</Text>
      </Container>
    );

    return !loaded ? <Text>Loading...</Text> : view;
  }
}
