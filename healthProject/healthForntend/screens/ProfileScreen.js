import React, { useEffect, useState } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
	const [bookedTrainers, setBookedTrainers] = useState([]);

	const fetchBookedTrainers = async () => {
		try {
			// Retrieve booked trainers' names from AsyncStorage
			const keys = await AsyncStorage.getAllKeys();
			const trainerKeys = keys.filter((key) =>
				key.startsWith('bookedTrainer_')
			);
			const trainers = await AsyncStorage.multiGet(trainerKeys);

			// Extract the trainer names
			const trainerNames = trainers.map(([, value]) => value);

			setBookedTrainers(trainerNames);
		} catch (error) {
			console.error('Error fetching booked trainers:', error);
		}
	};

	useEffect(() => {
		fetchBookedTrainers();
	}, []);

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.heading}>Booked Trainers</Text>
			{bookedTrainers.length === 0 ? (
				<Text style={styles.noTrainers}>No trainers booked yet.</Text>
			) : (
				bookedTrainers.map((trainer, index) => (
					<Text key={index} style={styles.trainerName}>
						{trainer}
					</Text>
				))
			)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 24,
	},
	heading: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	noTrainers: {
		fontSize: 16,
		color: 'gray',
		textAlign: 'center',
		marginTop: 16,
	},
	trainerName: {
		fontSize: 18,
		marginBottom: 8,
	},
});

export default ProfileScreen;
