import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokeDetailScreen from '../screens/PokeDetailScreen';
import {SimplePokemon} from '../interfaces/pokemonsInterface';

export type RootStackParams = {
  Home: undefined;
  DetailPokemon: SimplePokemon;
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
