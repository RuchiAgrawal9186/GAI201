import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const ProductScreen = () => {
	const [bookedTrainers, setBookedTrainers] = useState([]);

	// Fetch booked trainers from AsyncStorage on component mount
	useEffect(() => {
		fetchBookedTrainers();
	}, []);

	const fetchBookedTrainers = async () => {
		try {
			// Retrieve all keys stored in AsyncStorage
			const allKeys = await AsyncStorage.getAllKeys();

			// Filter keys to get only trainer keys (those that start with 'bookedTrainer_')
			const trainerKeys = allKeys.filter((key) =>
				key.startsWith('bookedTrainer_')
			);

			// Retrieve trainer names from trainer keys
			const trainers = await AsyncStorage.multiGet(trainerKeys);

			// Extract the trainer names
			const trainerNames = trainers.map(([, value]) => value);

			// Update the state with the booked trainers
			setBookedTrainers(trainerNames);
		} catch (error) {
			console.error('Error fetching booked trainers:', error);
		}
	};

	const handleBookTrainer = async (name, index) => {
		try {
			// Check if the trainer is already booked
			const isAlreadyBooked = bookedTrainers.includes(name);

			if (!isAlreadyBooked) {
				// Save the booked trainer's name to AsyncStorage
				await AsyncStorage.setItem(`bookedTrainer_${index}`, name);
				setBookedTrainers([...bookedTrainers, name]);
			}
		} catch (error) {
			console.error('Error booking trainer:', error);
		}
	};

	const data = [
		{
			name: 'Zara',
			degree: ' Masters in Fitness',
			image: require('../assets/img01.webp'),
		},
		{
			name: 'Steve James',
			degree: 'PHD in Fitness',
			image: require('../assets/img02.webp'),
		},
		{
			name: 'Sherley',
			degree: 'Masters in YOGA',
			image: require('../assets/img03.webp'),
		},
		{
			name: 'Jack',
			degree: 'Masters in Kung-Fu',
			image: require('../assets/img04.webp'),
		},
		{
			name: 'Justin',
			degree: 'Specialized Zumba Trainer',
			image: require('../assets/img05.webp'),
		},
		{
			name: 'Nora',
			degree: 'Masters in Nutrition & Cardio',
			image: require('../assets/img06.webp'),
		},
		// Add more trainer data here
	];

	return (
		<View style={styles.container}>
			<Text style={styles.totalTrainers}>Total Trainers: {data.length}</Text>
			<FlatList
				data={data}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item, index }) => (
					<View style={styles.trainerCard}>
						<Image source={item.image} style={styles.trainerImage} />
						<Text>Name: {item.name}</Text>
						<Text>Degree: {item.degree}</Text>
						<TouchableOpacity
							onPress={() => handleBookTrainer(item.name, index)}
							style={[
								styles.bookButton,
								{
									backgroundColor: bookedTrainers.includes(item.name)
										? 'gray'
										: 'green',
								},
							]}
							disabled={bookedTrainers.includes(item.name)}>
							<Text>
								{bookedTrainers.includes(item.name)
									? 'Trainer Booked Successfully'
									: 'Book Trainer'}
							</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 24,
	},
	totalTrainers: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	trainerImage: {
		width: 100, // Set the desired width
		height: 100, // Set the desired height
		resizeMode: 'cover', // Adjust the resizeMode as needed
		borderRadius: 20, // Apply a borderRadius for a circular image (optional)
		marginTop: 50,
	},
	bookButton: {
		marginTop: 8,
		padding: 8,
		borderRadius: 8,
		alignItems: 'center',
	},
});

export default ProductScreen;
