import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import {SimplePokemon} from '../interfaces/pokemonsInterface';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import FadeImage from './FadeImage';

interface Props {
  pokemon: SimplePokemon;
}
const PokeCard = ({pokemon}: Props) => {
  const {name, id, color, picture} = pokemon;

  const width = useWindowDimensions().width * 0.4;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      //se lo mandamos asi porque los params se pasan en un obj, entonces directamente
      //le pasamos todo el obj del pokemon
      onPress={() => navigation.navigate('DetailPokemon', pokemon)}
      style={{...styles.pokeContainer, width}}>
      <View style={{flex: 1, zIndex: -2}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginHorizontal: 10,
          }}>
          {name}
        </Text>
        {/* <View style={{position: 'absolute'}}> */}
        {/* <Image source={{uri: picture}} style={styles.pokeImg} /> */}
        <FadeImage uri={picture} style={styles.pokeImg} />
        {/* </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default PokeCard;

const styles = StyleSheet.create({
  pokeImg: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: -20,
    left: 40,
    // zIndex: 5000,
    zIndex: 500,
  },
  pokeContainer: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(0,0,0,.3)',
    borderWidth: 1,
    borderRadius: 15,
    // marginVertical: 20,
    width: 140,

    position: 'relative',
    height: 120,
    zIndex: -4,
  },
});
