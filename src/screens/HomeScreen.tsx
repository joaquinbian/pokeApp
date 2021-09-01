import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Image} from 'react-native-elements/dist/image/Image';
import {usePokemons} from '../hooks/usePokemons';
import {Result, SimplePokemon} from '../interfaces/pokemonsInterface';

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = ({navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  const {getPokemons, simplePokemons} = usePokemons();

  const renderItem = (name: string) => {
    return (
      <View>
        <Text>{name}</Text>
      </View>
    );
  };

  return (
    <View style={{marginTop: top + 10, flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.pokebolaImgContainer}>
        <Image
          source={require('../assets/pokebola.png')}
          style={styles.pokebolaImg}
        />
      </View>
      <View style={{marginTop: top + 10, marginHorizontal: 15}}>
        <Text>Pokedex</Text>
        <FlatList
          data={simplePokemons}
          renderItem={({item}: {item: SimplePokemon}) => renderItem(item.name)}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pokebolaImgContainer: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
  pokebolaImg: {
    height: 300,
    width: 300,
    opacity: 0.4,
  },
});
