import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Result, PokemonDetails } from 'src/pokemon.model';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
//  @Input() pokemon: any;
  PokemonDetails: any[] = [];


// constructor(private pokemonService: PokemonService) { }

// ngOnInit() {
//   this.pokemonService.getPokemons()
//     .subscribe((data:any) => {
//       this.PokemonDetails = data.results;
//     });
// }

newPokemons: any[] = [];

  constructor(private pokemon: PokemonService) {}

  ngOnInit() {
    this.pokemon.getPokemons()
       .subscribe((data: any) => {
         console.log(data);
         this.newPokemons = data.results;

         this.newPokemons.forEach((pokemon: any) => {
           this.pokemon.getPokemonDetails(pokemon.url)
             .subscribe((details: any) => {
               pokemon.images = details.sprites.front_default;
               pokemon.height = details.height;
               pokemon.weight = details.weight;
             });
         });
       });
  }

}
