import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import InputSearch from '../components/InputSearch';
import PokeCard from '../components/PokeCard';
import usePokemonSearch from '../hooks/usePokemonSearch';
import {SimplePokemon} from '../interfaces/pokemonsInterface';

const SearchScreen = () => {
  const [text, setText] = useState('');
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemons} = usePokemonSearch();
  return (
    <View style={{top, ...styles.container}}>
      <InputSearch />
      <View>
        <FlatList
          data={simplePokemons}
          renderItem={({item}: {item: SimplePokemon}) => (
            <PokeCard pokemon={item} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{marginBottom: 15}} />}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    marginHorizontal: 10,
  },
});

export default SearchScreen;
