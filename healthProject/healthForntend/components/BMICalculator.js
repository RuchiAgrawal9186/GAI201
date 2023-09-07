// BMICalculator.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BMICalculator = () => {
	const [weight, setWeight] = useState('');
	const [height, setHeight] = useState('');
	const [bmi, setBMI] = useState(null);

	const calculateBMI = () => {
		// Calculate BMI here (weight / height^2)
		if (weight && height) {
			const weightKg = parseFloat(weight);
			const heightM = parseFloat(height) / 100; // Convert height from cm to m
			const calculatedBMI = (weightKg / (heightM * heightM)).toFixed(2);
			setBMI(calculatedBMI);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>BMI CALCULATOR</Text>
			<TextInput
				placeholder='Enter your weight (kg)'
				keyboardType='numeric'
				value={weight}
				onChangeText={(text) => setWeight(text)}
				style={styles.input}
			/>
			<TextInput
				placeholder='Enter your height (cm)'
				keyboardType='numeric'
				value={height}
				onChangeText={(text) => setHeight(text)}
				style={styles.input}
			/>
			<Button
				style={{ borderRadius: 50 }}
				title='Calculate BMI'
				onPress={calculateBMI}
			/>
			{bmi && <Text style={styles.result}>Your BMI: {bmi}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	input: {
		width: 300,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 20,
		padding: 20,
		marginBottom: 10,
	},
	result: {
		marginTop: 20,
		fontSize: 28,
		fontWeight: 'bold',
	},
});

export default BMICalculator;
