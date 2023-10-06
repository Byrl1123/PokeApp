import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  
  constructor(private http: HttpClient) { 
    console.log('Pokemon service ready')
  }

 getNewPokemons() {

  return this.http.get('https://pokeapi.co/api/v2/pokemon/');

 };

 getPokemonDetails(url: 'https://pokeapi.co/api/v2/pokemon/1/') {
  return this.http.get('https://pokeapi.co/api/v2/pokemon/1/')
 }


}
