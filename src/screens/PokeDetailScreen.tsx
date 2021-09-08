import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from 'react-native-elements';
import usePokemonDetail from '../hooks/usePokemonDetail';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'DetailPokemon'> {}

const PokeDetailScreen = ({route, navigation}: Props) => {
  const {height, width} = useWindowDimensions();
  const {pokemon, colorPrimary, colorSecondary} = route.params;
  const {id, name, picture} = pokemon;
  const {pokemonDetail, isLoading} = usePokemonDetail(id);

  console.log(name, colorPrimary);

  interface StatListProps {
    name: string;
    stat: number;
  }

  const StatsList = ({name, stat}: StatListProps) => {
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

  const LoadingPokemons = () => {
    return (
      <View style={styles.loadingPokemonsContainer}>
        <ActivityIndicator size={30} color="red" />
        <Text>Loading {name} info</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: colorPrimary,
          height: height * 0.5,
          width,
          position: 'absolute',
          borderBottomRightRadius: 1000,
          borderBottomLeftRadius: 1000,
        }}
      />
      <View
        style={{
          ...styles.header,
        }}>
        <Button
          title="Back"
          buttonStyle={{
            backgroundColor: colorSecondary,
            ...styles.btnBackStyle,
          }}
          containerStyle={{width: '100%'}}
          icon={
            <Icon
              name="chevron-back-outline"
              style={{color: '#fff'}}
              size={20}
            />
          }
          onPress={() => navigation.goBack()}
        />

        <Image source={{uri: picture}} style={{width: 300, height: 300}} />
        <Text style={{...styles.title, fontSize: 30}}>{name}</Text>
      </View>

      {!pokemonDetail ? (
        <LoadingPokemons />
      ) : (
        <View style={{marginHorizontal: 10}}>
          <View style={styles.sectionContainer}>
            <Text style={styles.title}>Height</Text>
            <Text>{pokemonDetail?.height}</Text>
          </View>
          <View style={styles.sectionContainer}>
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
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.title}>Habilities</Text>
            {pokemonDetail?.abilities.map((h, i) => {
              return (
                <View
                  key={i}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="chevron-forward-outline" size={20} />
                  <Text>{h.ability.name}</Text>
                </View>
              );
            })}
          </View>
          <View
            style={{
              ...styles.sectionContainer,
            }}>
            <Text style={styles.title}>Moves</Text>

            <View style={styles.movesContainer}>
              {pokemonDetail?.moves.map((m, i) => {
                return (
                  <View
                    key={i}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '50%',
                    }}>
                    <Icon name="chevron-forward-outline" size={20} />
                    <Text>{m}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.title}>Stats</Text>
            {pokemonDetail?.stats.map((s, i) => (
              <StatsList name={s.stat.name} stat={s.base_stat} key={i} />
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default PokeDetailScreen;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  sectionContainer: {
    marginVertical: 10,
  },
  movesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  loadingPokemonsContainer: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBackStyle: {
    width: '30%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },
});
