import React, { Component } from 'react';
import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import Styles from './styles/TabBarItemStyles';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import Translator from '@/translations';

interface Props { 
  iconName: string;
  title: string;
  isActive: boolean;
  onPress: (event: GestureResponderEvent) => void;
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
        <Text style={[Styles.tabBarItemText, isActive && Styles.tabBarItemTextActive]}>{Translator.trans(`routes.${title.toLowerCase()}`)}</Text>
      </TouchableOpacity>
    )
  }
}