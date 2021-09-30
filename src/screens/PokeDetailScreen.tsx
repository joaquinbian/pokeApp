import {StackScreenProps} from '@react-navigation/stack';
import React, {useRef} from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
import usePokemonDetail from '../hooks/usePokemonDetail';
import {RootStackParams} from '../navigator/StackNavigator';
import HeaderScreen from '../components/HeaderScreen';
import FadeImage from '../components/FadeImage';
import LoadingPokemons from '../components/LoadingPokemons';

interface Props extends StackScreenProps<RootStackParams, 'DetailPokemon'> {}

const PokeDetailScreen = ({route, navigation}: Props) => {
  const {height, width} = useWindowDimensions();
  const {pokemon, colorPrimary, colorSecondary} = route.params;
  const {id, name, picture} = pokemon;
  const {pokemonDetail, isLoading} = usePokemonDetail(id);
  const scrollY = useRef(new Animated.ValueXY({x: 0, y: 0}));

  const translateY = scrollY.current.y.interpolate({
    inputRange: [0, height * 0.6, height * 0.7],
    outputRange: [-100, height * 0.6 + 5, height * 0.7 + 5],
  });

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

  return (
    <View style={{flex: 1, marginBottom: 40}}>
      <ScrollView
        onScroll={e => {
          scrollY.current.setValue({x: 0, y: e.nativeEvent.contentOffset.y});
        }}
        // stickyHeaderIndices={[1]} //le pasamos el indice del child que queremos que quede fixed
      >
        {/* background del pokemon */}
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

        <Animated.View
          style={{
            transform: [{translateY}],
            ...styles.animatedHeader,
          }}>
          <HeaderScreen color={colorSecondary} name={name} image={picture} />
        </Animated.View>

        <View style={styles.header}>
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

        {isLoading ? (
          <LoadingPokemons colorPrimary={colorPrimary} name={name} />
        ) : (
          <View>
            <View>
              <View style={[styles.sectionContainer, styles.globalMargin]}>
                <Text style={styles.title}>Height</Text>
                <Text>{pokemonDetail?.height}</Text>
              </View>
              <View style={[styles.sectionContainer, styles.globalMargin]}>
                <Text style={styles.title}>Types</Text>
                {pokemonDetail?.types.map((t, i) => {
                  return (
                    <View
                      key={i}
                      style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon name="chevron-forward-outline" size={20} />
                      <Text>{t.type.name}</Text>
                    </View>
                  );
                })}
              </View>
              <View style={styles.sectionContainer}>
                <Text style={[styles.title, styles.globalMargin]}>Sprites</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {pokemonDetail?.sprites.map((s, i) => {
                    return (
                      <FadeImage
                        key={i}
                        uri={s}
                        style={{
                          width: 100,
                          height: 100,
                          backgroundColor: colorPrimary,
                          borderRadius: 50,
                          marginHorizontal: 5,
                        }}
                      />
                    );
                  })}
                </ScrollView>
              </View>
              <View style={[styles.sectionContainer, styles.globalMargin]}>
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
              <View style={[styles.sectionContainer, styles.globalMargin]}>
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
              <View style={[styles.sectionContainer, styles.globalMargin]}>
                <Text style={styles.title}>Stats</Text>
                {pokemonDetail?.stats.map((s, i) => (
                  <StatsList name={s.stat.name} stat={s.base_stat} key={i} />
                ))}
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
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
    // top: 0,
  },
  animatedHeader: {
    zIndex: 2000,
    shadowColor: '#000',
    position: 'absolute',
    // backgroundColor: 'red',
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  globalMargin: {
    marginHorizontal: 10,
  },
});
