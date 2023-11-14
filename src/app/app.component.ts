import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokedexComponent } from './pokedex/pokedex.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private http: HttpClient){

  }
}
