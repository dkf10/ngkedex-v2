import { IGeneral } from "./general.interface";

export namespace IGeneration {
  export interface Generation {
    id: number;
    name: string;
    pokemon_species: IGeneral.Result[];
    types: IGeneral.Result[];
  }
}