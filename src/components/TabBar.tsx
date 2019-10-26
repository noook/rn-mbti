import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import Styles from './styles/TabBarStyles';
import { NavigationStackProp } from 'react-navigation-stack';
import TabBarItem from '@/components/TabBarItem';

interface Props {
  navigation?: NavigationStackProp;
}

interface State {}

export default class TabBar extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <View style={Styles.tabBarContainer}>
          {this.props.navigation.state.routes.map(item => (
            <TabBarItem
              key={item.routeName}
              title={item.routeName}
              isActive={item.routeName === this.props.navigation.state.routes[this.props.navigation.state.index].routeName}
              iconName={item.params.icon}
              onPress={() => this.props.navigation.navigate(item.key)} />
          ))}
        </View>
      </SafeAreaView>
    )
  }
}