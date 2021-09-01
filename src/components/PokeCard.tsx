import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {SimplePokemon} from '../interfaces/pokemonsInterface';
import {poke_api} from '../api/index';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface Props {
  pokemon: SimplePokemon;
}
const PokeCard = ({pokemon}: Props) => {
  const {name, id, color, picture} = pokemon;
  const navigation = useNavigation();
  return (
    <View style={styles.pokeContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        //se lo mandamos asi porque los params se pasan en un obj, entonces directamente
        //le pasamos todo el obj del pokemon
        onPress={() => navigation.navigate('DetailPokemon', pokemon)}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginHorizontal: 10,
          }}>
          {name}
        </Text>
        <Image source={{uri: picture}} style={styles.pokeImg} />
      </TouchableOpacity>
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
