import { Routes } from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";
import { pokemonPage } from "src/app/core/enum/routes.enum";
import { PokemonComponent } from "./components/pokemon/pokemon.component";

export const pokedexRoutes: Routes = [
    { path: '', component: LandingComponent },
    { path: `${pokemonPage.POKEMON}/:id`, component: PokemonComponent }
]