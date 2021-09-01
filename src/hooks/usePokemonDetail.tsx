import React, {useEffect, useState} from 'react';
import {poke_api} from '../api/index';
import {
  PokemonDetail,
  SimplePokemonDetail,
} from '../interfaces/pokemonsInterface';
const usePokemonDetail = (id: string) => {
  const [pokemonDetail, setPokemonDetail] = useState<SimplePokemonDetail>();
  const [isLoading, setIsLoading] = useState(false);

  const getPokemonDetail = async () => {
    setIsLoading(true);
    const pokemon = await poke_api.get<PokemonDetail>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    const {abilities, name, sprites, stats, types, moves, height} =
      pokemon.data;
    const movesList: string[] = moves.map(m => m.move.name);
    const simplePokemon = {
      abilities,
      name,
      sprites: [
        sprites.back_default,
        sprites.back_shiny,
        sprites.front_default,
        sprites.front_shiny,
      ],
      stats,
      types,
      moves: movesList,
      height,
    };
    setPokemonDetail({...simplePokemon});
    setIsLoading(false);
  };
  useEffect(() => {
    getPokemonDetail();
  }, []);

  return {pokemonDetail, isLoading};
};
export default usePokemonDetail;
