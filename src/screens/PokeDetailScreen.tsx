import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import usePokemonDetail from '../hooks/usePokemonDetail';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'DetailPokemon'> {}

const PokeDetailScreen = ({route, navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  const pokemon = route.params;
  const {id, name, picture} = pokemon;
  const {pokemonDetail, isLoading} = usePokemonDetail(id);

  const StatsList = (name: string, stat: number) => {
    return (
      <View
        style={{
          marginVertical: 2,
          flexDirection: 'row',
        }}>
        <View style={{width: '50%'}}>
          <Text style={{fontSize: 17}}>{name}</Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 17}}>{stat}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={{marginTop: top + 10, marginHorizontal: 10}}>
      <Text>detail pokemon screen</Text>
      <Image source={{uri: picture}} style={{width: 300, height: 300}} />
      <Text>{name}</Text>
      {isLoading ? (
        <ActivityIndicator size={25} color="red" />
      ) : (
        <Text>{pokemonDetail?.height}</Text>
      )}
      <Text style={styles.title}>Sprites</Text>
      <ScrollView horizontal>
        {pokemonDetail?.sprites.map((s, i) => {
          return (
            <Image
              key={i}
              source={{uri: s}}
              style={{width: 100, height: 100}}
            />
          );
        })}
      </ScrollView>

      <Text style={styles.title}>Habilities</Text>

      <ScrollView>
        {pokemonDetail?.abilities.map((h, i) => {
          return <Text key={i}>{h.ability.name}</Text>;
        })}
      </ScrollView>
      <Text style={styles.title}>Moves</Text>
      <Text>{pokemonDetail?.moves.join(', ')}</Text>
      <Text style={styles.title}>Stats</Text>
      {pokemonDetail?.stats.map((s, i) => StatsList(s.stat.name, s.base_stat))}
    </ScrollView>
  );
};

export default PokeDetailScreen;

const styles = StyleSheet.create({title: {fontWeight: 'bold', fontSize: 20}});
