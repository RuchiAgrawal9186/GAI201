// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function GettingStartedScreen({ navigation, setIsStarted }) {
// 	const handleGetStarted = () => {
// 		setIsStarted(true);
// 		navigation.navigate('Home');
// 	};

// 	return (
// 		<LinearGradient colors={['#2e045e', '#1f1f1f']} style={styles.container}>
// 			<View style={styles.content}>
// 				<Text style={styles.title}>WELCOME TO FITHUB🦾</Text>
// 				<Button title='Get Started' onPress={handleGetStarted} />
// 			</View>
// 		</LinearGradient>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	content: {
// 		backgroundColor: 'rgba(255, 255, 255, 0.8)',
// 		padding: 20,
// 		borderRadius: 10,
// 		alignItems: 'center',
// 	},
// 	title: {
// 		fontSize: 24,
// 		fontWeight: 'bold',
// 		marginBottom: 20,
// 	},
// });

import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

export default function GettingStartedScreen({ navigation, setIsStarted }) {
	const handleGetStarted = () => {
		setIsStarted(true);
		navigation.navigate('Home');
	};

	return (
		<ImageBackground
			source={require('../assets/pink_abstract.jpg')}
			style={styles.backgroundImage}>
			<View style={styles.container}>
				<View style={styles.content}>
					<Text style={styles.title}>Welcome to the App!</Text>
					<Button title='Get Started' onPress={handleGetStarted} />
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', // or 'stretch' if you want the image to stretch to fill the entire screen
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		padding: 20,
		borderRadius: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
});
