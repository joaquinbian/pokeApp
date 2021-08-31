import React, {useRef, useEffect, useState} from 'react';
import {PokemonsList, Result} from '../interfaces/pokemonsInterface';
import {poke_api} from '../api/index';
import {AxiosResponse} from 'axios';

interface UseMoviesState {
  poke_list: Result[];
  //   nextPage: string;
}

export const usePokemons = () => {
  const nextPage = useRef('https://pokeapi.co/api/v2/pokemon/?limit=20');
  //guardamos la referencia a la url a la que le vamos a pegar, entonces cuando
  //hacemos la peticion guardamos la referencia a la proxima url, y como lo hacemos
  //con ref, no hace una re-rendereizacion del componente, y luego cuando llamamos
  //de nuevo al hook, ya queda la proxima
  const [poke_list, setPoke_list] = useState<Result[]>([]);

  const getPokemons = async () => {
    const pokeList = await poke_api.get<PokemonsList>(nextPage.current);
    nextPage.current = pokeList.data.next;
    // console.log(pokeList.data.results);
    // console.log(pokemons);
    setPoke_list(pokeList.data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    getPokemons,
    poke_list,
  };
};
