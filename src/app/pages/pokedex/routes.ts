import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { pokemonPage } from "src/app/core/enum/routes.enum";
import { LandingComponent } from "./components/landing/landing.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: `${pokemonPage.POKEMON}/:id`, component: PokemonComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokedexRoutingModule { }
