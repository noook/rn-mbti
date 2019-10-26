import React, { Component } from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Styles from './styles/ContainerStyles';

interface Props {
	navigation?: NavigationStackProp;
	style?: StyleProp<ViewStyle>;
}

interface State {}

export default class Container extends Component<Props, State> {
	render() {
		return (
			<SafeAreaView
				style={[Styles.container, this.props.style && this.props.style]}
				{...(({ style, ...rest }) => rest)(this.props)}>
				{this.props.children && this.props.children}
			</SafeAreaView>
		);
	}
}
