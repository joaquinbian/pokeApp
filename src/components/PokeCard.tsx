import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SimplePokemon} from '../interfaces/pokemonsInterface';
import {poke_api} from '../api/index';

interface Props {
  pokemon: SimplePokemon;
}
const PokeCard = ({pokemon}: Props) => {
  const {name, id, color, picture} = pokemon;
  return (
    <View style={styles.pokeContainer}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginHorizontal: 10,
        }}>
        {name}
      </Text>
      <Image source={{uri: picture}} style={styles.pokeImg} />
    </View>
  );
};

export default PokeCard;

const styles = StyleSheet.create({
  pokeImg: {
    width: 100,
    height: 100,
  },
  pokeContainer: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(0,0,0,.3)',
    borderWidth: 1,
    borderRadius: 15,
    // marginVertical: 20,
    width: '45%',
  },
});
