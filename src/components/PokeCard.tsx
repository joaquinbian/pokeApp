import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {SimplePokemon} from '../interfaces/pokemonsInterface';
import FadeImage from './FadeImage';
import {getColors} from '../helpers/getColors';

interface Props {
  pokemon: SimplePokemon;
}

const PokeCard = ({pokemon}: Props) => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const [colors, setColors] = useState({
    primary: '',
    secondary: '',
  });

  const {primary, secondary} = colors;
  const isMounted = useRef(true);

  const getImageColors = async () => {
    const {colorPrimary, colorSecondary} = await getColors(pokemon.picture);
    if (isMounted.current) {
      setColors({
        primary: colorPrimary || 'gray',
        secondary: colorSecondary || 'gray',
      });
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      getImageColors();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('DetailPokemon', {
          pokemon,
          colorPrimary: primary,
          colorSecondary: secondary,
        })
      }>
      <View
        style={{
          ...styles.cardContainer,
          width: width * 0.4,
          backgroundColor: primary,
        }}>
        <View style={{width: 140}}>
          <Text style={styles.name}>{pokemon.name}</Text>
        </View>
        <View style={styles.imagePokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.imagePokebola}
          />
        </View>
        <FadeImage uri={pokemon.picture} style={styles.pokeImg} />
      </View>
    </TouchableOpacity>
  );
};

export default PokeCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    height: 120,
    width: 140,
    backgroundColor: 'red',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    flexWrap: 'wrap',
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    right: -10,
  },
  imagePokebolaContainer: {
    backgroundColor: 'transparent',
    height: 90,
    width: 90,
    right: 0,
    bottom: 0,
    position: 'absolute',
    overflow: 'hidden',
  },

  imagePokebola: {
    width: 90,
    height: 90,
    opacity: 0.6,
    position: 'absolute',
    top: 20,
    right: -20,
  },
  pokeImg: {
    width: 110,
    height: 110,
    position: 'absolute',
    right: 25,
    top: 10, //por esto la animacion no cae, y solo hace el efecto de fadeIN
  },
});
