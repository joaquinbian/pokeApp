import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokeDetailScreen from '../screens/PokeDetailScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        // headerMode: 'screen'<,
        // headerStyle: {},
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FavPokemons" component={PokeDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
