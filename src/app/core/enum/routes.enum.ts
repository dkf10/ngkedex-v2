type MainMenu = 'HOME' | 'POKEDEX' | 'MACHINES' | 'MOVES' | 'GENERATIONS' | 'ABOUT';
type PokemonPage = 'POKEMON';
type ErrorPage = 'ERR_401' | 'ERR_403' | 'ERR_404';

export const mainMenu: Record<MainMenu, string> = {
  HOME: 'home',
  POKEDEX: 'pokedex',
  MACHINES: 'machines',
  MOVES: 'moves',
  GENERATIONS: 'generations',
  ABOUT: 'about'
}

export const pokemonPage: Record<PokemonPage, string> = {
  POKEMON: 'pokemon'
}

export const errorPage: Record<ErrorPage, string> = {
  ERR_401: '401',
  ERR_403: '403',
  ERR_404: '404'
}