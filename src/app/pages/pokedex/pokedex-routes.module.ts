import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { pokemonPage } from "src/app/core/enum/routes.enum";
import { LandingComponent } from "./components/landing/landing.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { pokedexResolver } from "src/app/core/resolvers/pokedex/pokedex.resolver";

const routes: Routes = [
    { path: '', component: LandingComponent, resolve: { data: pokedexResolver } },
    { path: `${pokemonPage.POKEMON}/:id`, component: PokemonComponent, resolve: { data: pokedexResolver } }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokedexRoutingModule { }
