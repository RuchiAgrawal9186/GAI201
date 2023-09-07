import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'; // Import your screen components
import ProductScreen from './ProductScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Product' component={ProductScreen} />
			<Tab.Screen name='Profile' component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default TabNavigator;
