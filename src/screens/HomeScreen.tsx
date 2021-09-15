import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Image} from 'react-native-elements/dist/image/Image';
import {usePokemons} from '../hooks/usePokemons';
import {Result, SimplePokemon} from '../interfaces/pokemonsInterface';
import PokeCard from '../components/PokeCard';

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = ({navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  const {getPokemons, simplePokemons, isLoading} = usePokemons();

  const loadPokemons = () => {
    getPokemons();
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
        <FlatList
          data={simplePokemons}
          renderItem={({item}: {item: SimplePokemon}) => (
            <PokeCard pokemon={item} />
          )}
          keyExtractor={item => item.id}
          onEndReachedThreshold={0.5}
          onEndReached={loadPokemons}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{marginBottom: 15}} />}
          ListHeaderComponent={() => <Text style={styles.title}>Pokedex</Text>}
          ListFooterComponent={() => {
            return (
              <View
                style={{
                  height: 85,
                  alignItems: 'center',
                }}>
                {isLoading ? (
                  <ActivityIndicator color="yellow" size={25} />
                ) : null}
              </View>
            );
          }}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-around',
          }}
          progressViewOffset={3}
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
    opacity: 0.1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10,
  },
});
