import React, {useEffect, useState} from 'react';
import {poke_api} from '../api';
import {
  PokemonsList,
  SimplePokemon,
  Result,
} from '../interfaces/pokemonsInterface';

const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [simplePokemons, setSimplePokemons] = useState<SimplePokemon[]>([]);

  const loadPokemons = async () => {
    setIsFetching(true);
    const pokemons = await poke_api.get<PokemonsList>(
      'https://pokeapi.co/api/v2/pokemon/?limit=1200',
    );
    mapPokemonsList(pokemons.data.results);
  };

  const mapPokemonsList = (pokearr: Result[]) => {
    const newArr = pokearr.map(p => {
      const url = p.url.split('/');
      const id = url[url.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return {
        id,
        picture,
        name: p.name,
      };
    });
    setSimplePokemons(newArr);
  };
  useEffect(() => {
    loadPokemons();
  }, []);
  return {
    simplePokemons,
    isFetching,
  };
};
export default usePokemonSearch;
