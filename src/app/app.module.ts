import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; //importe del http

// importe de los componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';

// para importar las rutas
import { ROUTES } from './app.routes';

//servicios
import { PokemonService } from './services/pokemon.service';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PokemonInfoComponent,
    SearchPokemonComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true}),
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
