import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProductCard = ({
	image,
	name,
	degree,
	isTrainerBooked,
	onBookTrainer,
}) => {
	return (
		<View style={styles.card}>
			<Image source={image} style={styles.trainerImage} />{' '}
			{/* Display the trainer's image */}
			<Text style={styles.trainerName}>{name}</Text>
			<Text style={styles.trainerDegree}>{degree}</Text>
			<TouchableOpacity
				onPress={onBookTrainer}
				style={[
					styles.bookButton,
					isTrainerBooked ? styles.bookedButton : null,
				]}
				disabled={isTrainerBooked}>
				<Text>
					{isTrainerBooked ? 'Trainer Booked Successfully' : 'Book Trainer'}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 16,
		margin: 8,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 2,
	},
	trainerImage: {
		width: 100, // Set the width as needed
		height: 100, // Set the height as needed
		borderRadius: 50, // Make the image circular (adjust the radius as needed)
		marginBottom: 8,
	},
	trainerName: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 4,
	},
	trainerDegree: {
		fontSize: 16,
		color: 'gray',
		marginBottom: 12,
	},
	bookButton: {
		backgroundColor: '#3498db',
		padding: 8,
		borderRadius: 4,
		width: '100%',
		alignItems: 'center',
	},
	bookedButton: {
		backgroundColor: 'gray', // Change the background color when booked
	},
});

export default ProductCard;
