import { Result } from "./result.interface";

export namespace IMove {
  export interface Item {
    id: number;
    accuracy: number;
    contest_combos: {
      normal: Combo;
      super: Combo;
    };
    contest_effect: Result;
    contest_type: Result;
    damage_class: Result;
    effect_chance: number;
    effect_changes: VerboseEffect[];
    effect_entries: VerboseEffect[];
    flavor_text_entries: VerboseFlavorText[];
    flavor_text?: string;
    meta: Metadata;
    name: string;
    power: number;
    pp: number;
    super_contest_effects: Result;
    target: Result;
    type: Result;
  }

  export interface Combo {
    use_before: Result;
    use_after: Result;
  }

  export interface VerboseEffect {
    effect: string;
    short_effect: string;
    language: Result;
  }

  export interface VerboseFlavorText {
    flavor_text: string;
    language: Result;
  }

  export interface Metadata {
    ailment: Result;
    category: Result;
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