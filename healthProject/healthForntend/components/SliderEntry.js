// components/SliderEntry.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SliderEntry({ data }) {
	return (
		<View style={styles.slide}>
			<Image source={data.image} style={styles.image} />
		</View>
	);
}

const styles = StyleSheet.create({
	slide: {
		width: 300, // Define the item width based on your design
		height: 200, // Define the item height based on your design
		// Add any additional styling for each item
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
	},
});
