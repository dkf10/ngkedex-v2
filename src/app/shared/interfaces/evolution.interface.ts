import { IPokemon } from "./pokemon.interface";
import { Result } from "./result.interface";

export namespace IEvolution {
  export interface Item {
    id: number;
    chain: Chain
  }

  export interface DisplayItem extends IPokemon.ListItem {
    evo_detail: Detail;
  }

  export interface Chain {
    evolution_details: Detail;
    evolves_to: Chain[];
    is_baby: boolean;
    species: Result;
  }

  export interface Detail {
    gender: number;
    item: Result;
    trigger: Result;
  }
}