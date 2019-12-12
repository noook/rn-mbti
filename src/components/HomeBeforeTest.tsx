import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Container from './Container';
import StorageHelper from '@/helper/storage';
import styles from './styles/HomeBeforeTestStyle';
import BaseComponent from './BaseComponent';
import MbtiTypesChart from './MbtiTypesChart';

interface Props {
  navigation: NavigationStackProp<{
    onTestCompleted: () => void;
  }>;
}

interface State {
  tookTest: boolean;
}

export default class HomeBeforeTest extends BaseComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      tookTest: false,
    };
  }

  componentDidMount() {
    StorageHelper.getItem('userType')
      .then(() => {
        this.setState({ tookTest: true })
      })
      .catch(() => {
        this.setState({ tookTest: false })
      })
  }

  render() {
    const { tookTest } = this.state;
    return (
      <Container>
        <Text style={styles.title}>{this.$t('common.home')}</Text>
        { !tookTest ?
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.goToDisplayQuestion()}>
            <Text style={styles.buttonText}>
              {this.$t('common.startTheTest')}
            </Text>
          </TouchableOpacity>
        </View>
        :
        <View>
          <MbtiTypesChart />
          <View style={styles.remakeTest}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.goToDisplayQuestion()}>
              <Text style={styles.buttonText}>
                {this.$t('common.restartTheTest')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        }
      </Container>
    );
  }

  goToDisplayQuestion() {
    this.props.navigation.navigate('QuestionDisplay');
  }
}
