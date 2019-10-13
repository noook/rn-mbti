import React, { Component } from 'react';
import { View, SafeAreaView, StyleProp, StyleSheetProperties } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Styles from './styles/ContainerStyles';

interface Props {
	navigation: NavigationStackProp;
	style: StyleProp<StyleSheetProperties>;
}

interface State { }

export default class Container extends Component<Props, State> {
	render() {
		return (
			<SafeAreaView style={[Styles.container, this.props.style && this.props.style]}>
				{this.props.children && this.props.children}
			</SafeAreaView>
		);
	}
}
