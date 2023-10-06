import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  newPokemons: any[] = [];

  constructor(private pokemon: PokemonService) {


    this.pokemon.getNewPokemons()
       .subscribe( (data: any) => {
         console.log(data);
         this.newPokemons = data.results;

         this.newPokemons.forEach((pokemon: any) => {
          this.pokemon.getPokemonDetails(pokemon.url)
            .subscribe(( details: any ) => {
              pokemon.details = details;
            });
         });
       });


  };
  
  
}
