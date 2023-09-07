import React, { useState } from 'react';
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	Image,
	Animated,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import YouTubeVideoCard from '../components/YouTubeVideoCard';

const carouselData = [
	{ image: require('../assets/gym.jpg') },
	{ image: require('../assets/diet.webp') },
	{ image: require('../assets/yoga.jpg') },
	{ image: require('../assets/ramp.webp') },
	{ image: require('../assets/diet2.webp') },
];

const CarouselItem = ({ item }) => {
	return (
		<View style={styles.carouselItem}>
			<Image source={item.image} style={styles.carouselImage} />
			<Text style={styles.carouselTitle}>{item.title}</Text>
		</View>
	);
};

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	carouselContainer: {
		width: '80%', // Adjust the width as needed
		alignItems: 'center', // Center the carousel horizontally
	},
	carouselItem: {
		width: '100%', // Adjust the width as needed
		borderRadius: 10, // Apply border radius
		overflow: 'hidden', // Clip the content to the rounded shape
		backgroundColor: '#fff', // Background color of the item
		marginTop: 40, // Add vertical margin between carousel items
	},
	carouselImage: {
		width: '100%',
		height: 200, // Set a fixed height for the image
	},
	carouselTitle: {
		fontSize: 18,
		textAlign: 'center',
		padding: 10,
	},
	animatedHeading: {
		fontSize: 20, // Set the initial font size
		color: 'black', // Set the initial color
		alignSelf: 'center',
		marginTop: '20',
		// Add any other initial styles
	},
	optionsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	option: {
		width: '40%',
		height: 100,
		// padding: 10,
		margin: 10,
		alignItems: 'center',
		justifyContent: 'center', // Center text vertically from the top
		borderRadius: 10,
		overflow: 'hidden',
		// borderWidth: 1,
		// borderColor: 'gray',
	},
	optionImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		opacity: 0.9,
	},
	optionText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		textAlignVertical: 'center',
	},
});

export default function HomePage({ navigation }) {
	const navigateToBMICalculator = () => {
		navigation.navigate('BMICalculator');
	};
	const [animatedValue] = useState(new Animated.Value(0));
	const animateHeading = () => {
		Animated.timing(animatedValue, {
			toValue: 1, // Set the final value
			duration: 1000, // Animation duration in milliseconds
			useNativeDriver: false, // Add this if you're animating text
		}).start();
	};
	React.useEffect(() => {
		animateHeading();
	}, []);

	const animatedHeadingStyle = {
		fontSize: animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: [20, 30],
		}),
		color: animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['black', 'blue'],
		}),
	};

	return (
		<View>
			<Carousel
				data={carouselData}
				renderItem={({ item }) => <CarouselItem item={item} />}
				sliderWidth={screenWidth}
				itemWidth={screenWidth * 0.8} // Item width matches the style above
				layout={'default'}
				loop
			/>

			<Animated.Text style={[styles.animatedHeading, animatedHeadingStyle]}>
				Way To Fitness
			</Animated.Text>
			<View style={styles.optionsContainer}>
				<View style={styles.option}>
					<ImageBackground
						source={require('../assets/mainImg.jpg')}
						style={styles.optionImage}>
						<View style={{ flex: 1, justifyContent: 'center' }}>
							<Text style={styles.optionText}>Fitness</Text>
							<Text style={styles.optionText}>Zone</Text>
						</View>
					</ImageBackground>
				</View>
				<View style={styles.option}>
					<ImageBackground
						source={require('../assets/mainImg.jpg')}
						style={styles.optionImage}>
						<View style={{ flex: 1, justifyContent: 'center' }}>
							<Text style={styles.optionText}>Dieting</Text>
							<Text style={styles.optionText}>Zone</Text>
						</View>
					</ImageBackground>
				</View>
				<View style={styles.option}>
					<ImageBackground
						source={require('../assets/mainImg.jpg')}
						style={styles.optionImage}>
						<View style={{ flex: 1, justifyContent: 'center' }}>
							<Text style={styles.optionText}>YOGA</Text>
							<Text style={styles.optionText}>Zone</Text>
						</View>
					</ImageBackground>
				</View>
				<View style={styles.option}>
					<ImageBackground
						source={require('../assets/mainImg.jpg')}
						style={styles.optionImage}>
						<View style={{ flex: 1, justifyContent: 'center' }}>
							<Text style={styles.optionText}>BMI</Text>
							<Text style={styles.optionText}> Calculator</Text>
						</View>
					</ImageBackground>
				</View>
			</View>
			{/* <View>
				<YouTubeVideoCard />
			</View> */}
		</View>
	);
}
