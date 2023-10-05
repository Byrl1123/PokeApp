// archivo dedicado al manejo de rutas hacia componentes y servicios

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';


// para exportar las rutas 
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchPokemonComponent},
    {path: 'home', component: PokemonInfoComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];