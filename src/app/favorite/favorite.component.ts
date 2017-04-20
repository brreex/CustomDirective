import { Component,Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent{
@Input() hobbies;
  cond:boolean;
  value:string;
  constructor() {
    this.cond = true;
    this.value="Hide";
  }
  onoff(){
    this.cond = !(this.cond);
    if(this.cond==true)
      this.value = "Hide";
      else
      this.value = "Display";
  }
}
