import { Result } from "./result.interface";

export namespace IPokemon {
  export interface Main {
    count: number;
    next: string;
    previous: string;
    results: Result[];
  }

  export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    cries: Cry;
    forms: Result[];
    game_indices: GameIndex[];
    height: number;
    id: number;
    is_default: boolean;
    location_areas_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: Result;
    sprites: Sprite;
    stats: Stat[];
    types: Type[];
    weight: number;
  }

  export interface ListItem extends Result {
    id: number;
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
    pokemon: Result;
    types: Type[];
    version_group: Result;
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
    ability: Result;
    is_hidden: boolean;
    slot: number;
  }

  export interface Cry {
    latest: string;
    legacy: string;
  }

  export interface GameIndex {
    game_index: number;
    version: Result;
  }

  export interface Type {
    slot: number;
    type: Result;
  }

  export interface Stat {
    base_stat: number;
    effort: number;
    stat: Result;
  }

  export interface Move {
    move: Result;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: Result;
      version_group: Result;
    }[];
  }

  export interface Species {
    id: number;
    base_happiness: number;
    capture_rate: number;
    evolution_chain: Result;
    growth_rate: Result;
    habitat: Result;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
  }
}