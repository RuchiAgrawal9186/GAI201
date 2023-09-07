import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // Import Stack Navigator
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import GettingStartedScreen from './screens/GettingStartedScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BMICalculatorScreen from './screens/BMICalculatorScreen';
// import { useFonts } from 'expo-font';
// import { AppLoading } from 'expo';
// import { OpenSans_400Regular, Roboto_500Medium } from '@expo-google-fonts';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Initialize Stack Navigator

export default function App() {
	const [isStarted, setIsStarted] = useState(false);

	return (
		<NavigationContainer>
			{!isStarted ? (
				<Stack.Navigator
					initialRouteName={isStarted ? 'Home' : 'GettingStarted'}>
					<Stack.Screen name='GettingStarted' options={{ headerShown: false }}>
						{(props) => (
							<GettingStartedScreen {...props} setIsStarted={setIsStarted} />
						)}
					</Stack.Screen>
					<Stack.Screen name='BMICalculator' component={BMICalculatorScreen} />
					{/* Add this line */}
				</Stack.Navigator>
			) : (
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;

							if (route.name === 'Home') {
								iconName = focused ? 'home' : 'home-outline';
							} else if (route.name === 'Trainer') {
								iconName = focused ? 'basket' : 'basket-outline';
							} else if (route.name === 'Profile') {
								iconName = focused ? 'person' : 'person-outline';
							} else if (route.name === 'BMI') {
								iconName = focused ? 'fitness' : 'fitness-outline';
							}

							return <Ionicons name={iconName} size={size} color={color} />;
						},
					})}>
					<Tab.Screen name='Home' component={HomeScreen} />
					<Tab.Screen name='Trainer' component={ProductScreen} />
					<Tab.Screen name='Profile' component={ProfileScreen} />
					<Tab.Screen name='BMI' component={BMICalculatorScreen} />
				</Tab.Navigator>
			)}
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		fontWeight: '500',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });
