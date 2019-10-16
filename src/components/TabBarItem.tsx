import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './styles/TabBarItemStyles';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

interface Props { 
  iconName: String;
  title: String;
  isActive: Boolean;
  onPress: Function;
}
interface State { }

export default class TabBar extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { iconName, title, isActive, onPress } = this.props;
    return (
      <TouchableOpacity style={Styles.tabBarItem} onPress={onPress}>
        <Icon name={iconName} style={[Styles.tabBarItemIcon, isActive && Styles.tabBarItemIconActive]} />
        <Text style={[Styles.tabBarItemText, isActive && Styles.tabBarItemTextActive]}>{title}</Text>
      </TouchableOpacity>
    )
  }
}