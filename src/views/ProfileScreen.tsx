import React from 'react';
import { Text, Image, ScrollView, ActivityIndicator, View, TouchableOpacity, Share } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Container, DichotomyGauge, BaseComponent } from '@/components';
import styles from './styles/ProfileScreenStyles';
import StorageHelper from '@/helper/storage';
import { UserType, Dichotomy } from '@/types/mbti';
import { initResults } from '@/helper/mbti';
import { pics } from '@/constants/Mbti';
import { Colors } from '@/constants';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { NavigationEventSubscription } from 'react-navigation';

interface Props {
  navigation: NavigationStackProp;
}

interface State {
  loaded: boolean;
  testDone: boolean,
  type: string;
  ratios: {
    [key in Dichotomy]: number;
  }
}

/**
 * Remove later. Development purpose
 */
const mock: UserType = {
  type: 'ISTP',
  ratios: {
    E: 12,
    I: 21,
    N: 15,
    S: 25,
    F: 8,
    T: 18,
    P: 24,
    J: 6,
  },
};

export default class ProfileScreen extends BaseComponent<Props, State> {
  private focusListener: NavigationEventSubscription;

  public constructor(props: Props) {
    super(props);

    this.state = {
      loaded: false,
      testDone: false,
      type: '',
      ratios: initResults(),
    }
  }

  async updateType() {
    try {
      const { type, ratios } = await StorageHelper.getItem<UserType>('userType', JSON.parse);
      this.setState({ type, ratios, loaded: true, testDone: true });
    } catch (e) {
      this.setState({ testDone: false, loaded: true });
    }
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.updateType();
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  shareTestResults() {
    const { type } = this.state;
    Share.share({
      message: `https://www.16personalities.com/${type.toLowerCase()}-personality`,
      title: this.$t('common.profile.share_text'),
      url: `https://www.16personalities.com/${type.toLowerCase()}-personality` // only ios
    }, {

    });
  }

  render() {
    const { type, loaded, testDone } = this.state;
    let view = null;

    if (!loaded) {
      view = (
        <View style={styles.centeredView}>
          <ActivityIndicator size={'large'} color={Colors.green} />
        </View>
      );
    } else if (loaded && !testDone) {
      view = <Text>Error go take the test you faggot</Text>
    } else {
      view = (
        <View>
          <View>
            <Image style={styles.illustration} source={pics[type]} resizeMode={'contain'} />
            <TouchableOpacity onPress={() => this.shareTestResults()} style={styles.shareButton}>
              <Icon name={'share-square'} style={styles.shareButtonIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.aka}>{this.$t(`mbti.typeAka.${type}`)}</Text>
          <DichotomyGauge type={type} ratios={this.state.ratios} />
          <Text style={styles.summaryTitle}>{this.$t('common.summary')}:</Text>
          <Text style={styles.summaryParagraph}>{this.$t(`mbti.summaries.${type}`)}</Text>
        </View>
      );
    }

    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Container style={styles.container}>
            <Text style={styles.title}>{this.$t('common.profile.title')}</Text>
            {view}
        </Container>
      </ScrollView>
    );
  }
}
