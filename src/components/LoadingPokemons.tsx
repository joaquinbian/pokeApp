import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

interface Props {
  colorPrimary: string;
  name: string;
}

const LoadingPokemons = ({colorPrimary, name}: Props) => {
  return (
    <View style={styles.loadingPokemonsContainer}>
      <ActivityIndicator size={30} color={colorPrimary} />
      <Text>Loading {name} info</Text>
    </View>
  );
};

export default LoadingPokemons;

const styles = StyleSheet.create({
  loadingPokemonsContainer: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
