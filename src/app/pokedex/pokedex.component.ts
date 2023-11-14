import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  constructor(private http: HttpClient){

  }

  pokemonId: string = "";
  response: any;
  artwork: any;
  img: string = "";

  search(id: any){
    this.http.get('https://pokeapi.co/api/v2/pokemon/' + id).subscribe((response)=>{
      this.response = response;
      this.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png"; 
    })
  }

  searchPrev(id: any){
    this.pokemonId = id;
    this.search(id);
  }

  searchNext(id: any){
    this.pokemonId = id;
    this.search(id);
  }

}
