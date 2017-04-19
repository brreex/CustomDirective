import { Component,Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent{
@Input() hobbies;
  constructor() {
  }
}
