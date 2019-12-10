import React from 'react';
import { FlatList, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { MbtiTypeCategoryItem, MbtiTypeItem } from '@/types/mbti';
import BaseComponent from './BaseComponent';
import TypeModal from './TypeModal';
import styles from './styles/TypeCategoryModalStyles';
import Modal from 'react-native-modal';
import MbtiTypeTile from './MbtiTypeTile';

interface Props {
	category: MbtiTypeCategoryItem;
	isVisible: boolean;
	onBackPress: () => void;
}

interface State {
	isModalVisible: boolean;
	selectedType: MbtiTypeItem;
}

export default class TypeCategoryModal extends BaseComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isModalVisible: false,
			selectedType: {
				aka: '',
				name: '',
				summary: '',
			}
		};
		this.renderTypes = this.renderTypes.bind(this);
	}

	public renderTypes({ item, index }) {
		return (
			<MbtiTypeTile item={item} key={index} onPress={() => {
				this.setState({ isModalVisible: true, selectedType: item });
			}} />
		);
	}

	render() {
		const { category, isVisible, onBackPress } = this.props;
		return (
			<Modal
				onBackButtonPress={onBackPress}
				isVisible={isVisible}
				style={styles.modal}
				hasBackdrop={false}>
				<TypeModal
					isVisible={this.state.isModalVisible}
					type={this.state.selectedType}
					onBackPress={() => this.setState({ isModalVisible: false })} />
				<ScrollView style={styles.modalContent}>
					<View style={styles.header}>
						<TouchableOpacity
							onPress={onBackPress}
							style={styles.backButton}
							hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
							<Text style={styles.backButtonText}>&times;</Text>
						</TouchableOpacity>
						<Text style={styles.typeAka}>{category.name}</Text>
					</View>
					<FlatList
						style={styles.typesList}
						scrollEnabled={false}
						data={category.types}
						renderItem={this.renderTypes}
						keyExtractor={item => item.aka} />
				</ScrollView>
			</Modal>
		);
	}
}