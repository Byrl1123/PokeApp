import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Welcome } from 'src/pokemon.model';
import { PokemonInfoComponent } from '../components/pokemon-info/pokemon-info.component';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  static getPokemonDetails(url: any) {
    throw new Error('Method not implemented.');
  }
  
  private apiURL = 'https://pokeapi.co/api/v2/pokemon/';
  static getNewPokemons: any;

  constructor( private http: HttpClient) {
  };

  getPokemons(): Observable<Welcome> {
    return this.http.get<Welcome>(this.apiURL)
  };

  getPokemonDetails(url:string): Observable<PokemonInfoComponent> {
    return this.http.get<PokemonInfoComponent>(url);
  }

}
