export interface PokemonsList {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
export interface SimplePokemon {
  name: string;
  id: string;
  picture: string;
  color?: string;
}
