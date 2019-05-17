import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getDratini();
  }

  getDratini(){
    let dratini = this._http.get("https://pokeapi.co/api/v2/pokemon/dratini");
    
    dratini.subscribe(data => {
      console.log(data.forms[0].name + "'s abilities are " + data.abilities[0].ability.name + " and " + data.abilities[1].ability.name);
      let ab1 = this._http.get("https://pokeapi.co/api/v2/ability/" + data.abilities[0].ability.name);
      let ab2 = this._http.get("https://pokeapi.co/api/v2/ability/" + data.abilities[1].ability.name);
      ab1.subscribe(data =>
        console.log(data.pokemon.length + " pokemon share the ability marvel scale"));
      ab2.subscribe(data =>
        console.log(data.pokemon.length + " pokemon share the ability shed skin"));
    });
  }
}