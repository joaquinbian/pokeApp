import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokeFavsScreens from '../screens/PokeFavsScreens';

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
      <Stack.Screen name="FavPokemons" component={PokeFavsScreens} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
