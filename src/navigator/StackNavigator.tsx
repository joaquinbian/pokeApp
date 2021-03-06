import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokeDetailScreen from '../screens/PokeDetailScreen';
import {SimplePokemon} from '../interfaces/pokemonsInterface';
import SearchScreen from '../screens/SearchScreen';

export type RootStackParams = {
  Home: undefined;
  DetailPokemon: {
    pokemon: SimplePokemon;
    colorPrimary: string;
    colorSecondary: string;
  };
  SearchScreen: undefined;
};
const Stack = createStackNavigator<RootStackParams>();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
        cardStyle: {backgroundColor: '#fff'},
        // headerMode: 'screen'<,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailPokemon" component={PokeDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
