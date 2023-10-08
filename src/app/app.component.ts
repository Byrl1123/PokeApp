import { Welcome } from 'src/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  welcomeData: Welcome | undefined;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(data => {
      this.welcomeData = data;
    });
  }
}
