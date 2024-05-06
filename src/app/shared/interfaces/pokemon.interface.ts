export namespace IPokemon {
  export interface Main {
    count: number;
    next: string;
    previous: string;
    results: Result[];
  }

  export interface Result {
    name: string;
    url: string;
  }

  export interface Pokemon extends Result {
    id: number;
    sprite_link: string;
    display_name: string;
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

  export interface Type {
    slot: number;
    type: Result;
  }
}