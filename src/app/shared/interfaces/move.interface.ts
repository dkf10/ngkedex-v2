import { IGeneral } from "./general.interface";

export namespace IMove {
  export interface Item {
    id: number;
    accuracy: number;
    contest_combos: {
      normal: Combo;
      super: Combo;
    };
    contest_effect: IGeneral.Result;
    contest_type: IGeneral.Result;
    damage_class: IGeneral.Result;
    effect_chance: number;
    effect_changes: VerboseEffect[];
    effect_entries: VerboseEffect[];
    flavor_text_entries: VerboseFlavorText[];
    flavor_text?: string;
    meta: Metadata;
    name: string;
    names: VerboseName[];
    power: number;
    pp: number;
    super_contest_effects: IGeneral.Result;
    target: IGeneral.Result;
    type: IGeneral.Result;
  }

  export interface Combo {
    use_before: IGeneral.Result;
    use_after: IGeneral.Result;
  }

  export interface VerboseName {
    name: string;
    language: IGeneral.Result;
  }

  export interface VerboseEffect {
    effect: string;
    short_effect: string;
    language: IGeneral.Result;
  }

  export interface VerboseFlavorText {
    flavor_text: string;
    language: IGeneral.Result;
  }

  export interface Metadata {
    ailment: IGeneral.Result;
    category: IGeneral.Result;
    min_hits: number;
    max_hits: number;
    min_turns: number;
    max_turns: number;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;
  }
}