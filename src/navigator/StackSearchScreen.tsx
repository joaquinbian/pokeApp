import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {create} from 'react-test-renderer';
import SearchScreen from '../screens/SearchScreen';
import PokeDetailScreen from '../screens/PokeDetailScreen';
import {RootStackParams} from './StackNavigator';

const StackSearchScreen = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="DetailPokemon" component={PokeDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackSearchScreen;
