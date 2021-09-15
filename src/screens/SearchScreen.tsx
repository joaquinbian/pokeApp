import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Platform,
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import InputSearch from '../components/InputSearch';
import PokeCard from '../components/PokeCard';
import usePokemonSearch from '../hooks/usePokemonSearch';
import {SimplePokemon} from '../interfaces/pokemonsInterface';

const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {width} = useWindowDimensions();
  const {isFetching, simplePokemons} = usePokemonSearch();
  const [term, setTerm] = useState('');
  const [pokeFiltered, setPokeFiltered] = useState<SimplePokemon[]>([]);
  const flatList = useRef<FlatList<any>>(null);

  useEffect(() => {
    if (term.length > 0) {
      setPokeFiltered(
        simplePokemons.filter(p =>
          p.name.toLowerCase().includes(term.toLowerCase()),
        ),
      );
    } else {
      setPokeFiltered(simplePokemons);
    }
    pokeFiltered.length &&
      flatList.current?.scrollToIndex({index: 0, animated: false});
  }, [term, isFetching]);

  if (isFetching) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={25} />
        <Text>Loading pokemons...</Text>
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      style={{top, ...styles.container}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <InputSearch
            onDebounce={value => setTerm(value)}
            style={{
              position: 'absolute',
              zIndex: 1000,
              width,
              top: Platform.OS === 'android' ? top + 5 : top,
            }}
          />

          <View style={{marginHorizontal: 10}}>
            <FlatList
              data={pokeFiltered}
              renderItem={({item}: {item: SimplePokemon}) => (
                <PokeCard pokemon={item} />
              )}
              keyExtractor={item => item.id}
              ListHeaderComponent={() =>
                term.length ? <Text style={styles.title}>{term}</Text> : null
              }
              ListFooterComponent={() => <View style={{marginBottom: 90}} />}
              style={{paddingTop: top + 55}}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{marginBottom: 15}} />}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-around',
              }}
              progressViewOffset={3}
              ref={flatList}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    marginHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginHorizontal: 10,
    marginBottom: 5,
  },
});

export default SearchScreen;
