import { IGeneral } from "./general.interface";

export namespace IPokemon {
  export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    cries: Cry;
    forms: IGeneral.Result[];
    game_indices: GameIndex[];
    height: number;
    id: number;
    is_default: boolean;
    location_areas_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: IGeneral.Result;
    sprites: Sprite;
    stats: Stat[];
    types: Type[];
    weight: number;
  }

  export interface ListItem extends IGeneral.Result {
    sprite_link: string;
  }

  export interface Form {
    id: number;
    form_name: string;
    form_names: string[];
    form_order: number;
    is_battle_only: boolean;
    is_default: boolean;
    is_mega: boolean;
    name: string;
    names: string[];
    order: number;
    sprites: Sprite;
    pokemon: IGeneral.Result;
    types: Type[];
    version_group: IGeneral.Result;
  }

  export interface Sprite {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  }

  export interface Ability {
    ability: IGeneral.Result;
    is_hidden: boolean;
    slot: number;
  }

  export interface Cry {
    latest: string;
    legacy: string;
  }

  export interface GameIndex {
    game_index: number;
    version: IGeneral.Result;
  }

  export interface Type {
    slot: number;
    type: IGeneral.Result;
  }

  export interface Stat {
    base_stat: number;
    effort: number;
    stat: IGeneral.Result;
  }

  export interface Move {
    move: IGeneral.Result;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: IGeneral.Result;
      version_group: IGeneral.Result;
    }[];
  }

  export interface Species {
    id: number;
    base_happiness: number;
    capture_rate: number;
    evolution_chain: IGeneral.Result;
    growth_rate: IGeneral.Result;
    habitat: IGeneral.Result;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
  }
}