import { IGeneral } from "./general.interface";

export namespace IEvolution {
  export interface Item {
    id: number;
    chain: Chain
  }

  export interface Chain {
    evolution_details: Detail[];
    evolves_to: Chain[];
    is_baby: boolean;
    species: IGeneral.Result;
  }

  export interface Detail {
    gender: number;
    item: IGeneral.Result;
    trigger: IGeneral.Result;
  }
}