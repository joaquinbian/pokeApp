import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import SearchScreen from '../screens/SearchScreen';
import {Platform} from 'react-native';

const TabNavigator = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={{
        headerShown: false,
        //el tabBarLabel son los titulitos del menu
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'android' ? 10 : 0,
        },
      }}>
      <TabNavigator.Screen name="home" component={StackNavigator} />
      <TabNavigator.Screen name="search" component={SearchScreen} />
    </TabNavigator.Navigator>
  );
};

export default BottomTabNavigator;
