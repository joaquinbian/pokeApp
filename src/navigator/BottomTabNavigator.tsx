import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {BlurView} from 'expo-blur';
import SearchScreen from '../screens/SearchScreen';
import StackNavigator from './StackNavigator';

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
        tabBarStyle: {
          // backgroundColor: 'red',
          borderWidth: 0,
          elevation: 0,
          position: 'absolute',
        },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={100}
            style={{...StyleSheet.absoluteFillObject}}
          />
        ),
      }}>
      <TabNavigator.Screen
        name="home"
        component={StackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" color={color} size={20} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search-outline" color={color} size={20} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default BottomTabNavigator;
