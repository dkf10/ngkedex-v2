type MainMenu = 'HOME' | 'POKEDEX' | 'MACHINES';
type ErrorPage = 'ERR_401' | 'ERR_403' | 'ERR_404';

export const mainMenu: Record<MainMenu, string> = {
  HOME: 'home',
  POKEDEX: 'pokedex',
  MACHINES: 'machines'
}

export const errorPage: Record<ErrorPage, string> = {
  ERR_401: '401',
  ERR_403: '403',
  ERR_404: '404'
}