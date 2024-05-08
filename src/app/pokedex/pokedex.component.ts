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
        if (this.isNumeric(id)){
          this.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png";
        }
        else{
          this.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + this.response.id + ".png"; 
        };
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

  getId(){
      return this.response.id;
  }

  getName(){
    return this.response.name[0].toUpperCase()+this.response.name.slice(1);
  }

  getType(){
    const types = [];
    for(let i = 0; i < this.response.types.length; i++){
      types.push(this.response.types[i].type.name);
    } 
    return types.join(', ');
  }

  isNumeric(value: any){
    return /^-?\d+$/.test(value);
  }
}
