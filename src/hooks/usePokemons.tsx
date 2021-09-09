import React, {useRef, useEffect, useState} from 'react';
import {
  PokemonsList,
  Result,
  SimplePokemon,
} from '../interfaces/pokemonsInterface';
import {poke_api} from '../api/index';

export const usePokemons = () => {
  const nextPage = useRef('https://pokeapi.co/api/v2/pokemon/?limit=20');
  //guardamos la referencia a la url a la que le vamos a pegar, entonces cuando
  //hacemos la peticion guardamos la referencia a la proxima url, y como lo hacemos
  //con ref, no hace una re-rendereizacion del componente, y luego cuando llamamos
  //de nuevo al hook, ya queda la proxima

  const [isLoading, setIsLoading] = useState(false);
  const [simplePokemons, setSimplePokemons] = useState<SimplePokemon[]>([]);
  const isMounted = useRef(true);

  const getPokemons = async () => {
    setIsLoading(true);
    const pokeList = await poke_api.get<PokemonsList>(nextPage.current);
    nextPage.current = pokeList.data.next;
    mapPokemonList(pokeList.data.results);
  };

  const mapPokemonList = (pokeList: Result[]) => {
    const newPokeArr: SimplePokemon[] = pokeList.map(p => {
      const urlArr = p.url.split('/');
      // console.log(urlArr[urlArr.length - 2], 'a');
      const id = urlArr[urlArr.length - 2];

      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return {
        id,
        picture,
        name: p.name,
      };
    });
    setTimeout(() => {
      setSimplePokemons([...simplePokemons, ...newPokeArr]);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (!isMounted) return;
    else {
      getPokemons();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    getPokemons,
    simplePokemons,
    isLoading,
  };
};
