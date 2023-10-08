import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetails } from 'src/pokemon.model';
import { Result } from 'src/pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemonUrl: string = '';
  pokemonDetails: PokemonDetails | undefined;


  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    if (this.pokemonUrl) {
      this.pokemonService.getPokemonDetails(this.pokemonUrl).subscribe((data:any) => {
        this.pokemonDetails = data;
        console.log(data);
      });
    }
  }

}
