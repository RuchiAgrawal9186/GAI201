// BMICalculatorScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import BMICalculator from '../components/BMICalculator';

const BMICalculatorScreen = () => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<BMICalculator />
		</View>
	);
};

export default BMICalculatorScreen;
