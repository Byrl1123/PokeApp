import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Welcome } from 'src/pokemon.model';
import { PokemonInfoComponent } from '../components/pokemon-info/pokemon-info.component';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  
  private apiURL = 'https://pokeapi.co/api/v2/pokemon/';

  constructor( private http: HttpClient) {
  };

  getPokemons(): Observable<Welcome> {
    return this.http.get<Welcome>(this.apiURL)
  };

  getPokemonDetails(url:string): Observable<PokemonInfoComponent> {
    return this.http.get<PokemonInfoComponent>(url);
  }

}
