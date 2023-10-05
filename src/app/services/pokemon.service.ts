import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  
  constructor(private http: HttpClient) { 
    console.log('Pokemon service ready')
  }

 getNewPokemons() {
  const headers = new HttpHeaders({
    'Authorization': ''
  })
  this.http.get('https://pokeapi.co/api/v2/ability/', {headers});

 }



}
