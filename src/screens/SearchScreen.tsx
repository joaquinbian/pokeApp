import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from 'react-native';
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
  const {width} = useWindowDimensions();
  return (
    <View style={{top, ...styles.container}}>
      <InputSearch
        style={{
          position: 'absolute',
          zIndex: 1000,
          width,
          top: Platform.OS === 'android' ? top + 5 : top,
        }}
      />
      <View style={{marginHorizontal: 10}}>
        <FlatList
          data={simplePokemons}
          renderItem={({item}: {item: SimplePokemon}) => (
            <PokeCard pokemon={item} />
          )}
          keyExtractor={item => item.id}
          style={{paddingTop: top + 55}}
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
