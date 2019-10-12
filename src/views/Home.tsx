import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface Props {
  navigation: NavigationStackProp;
}

interface State {}

export default class Home extends Component<Props, State> {
  render() {
    return (
      <View>
        <Button
          title={'Press me'}
          onPress={() => this.props.navigation.navigate('Secondary')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
