import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
  color:string;
  colorarray:[string] = ["red","green","blue","yellow"];
  index:number = 0;
  constructor(private element:ElementRef,private renderer:Renderer) {
  }

   @HostListener('click')
   myclorClicked(){
     if(this.index>this.colorarray.length)
        this.index = 0;
      this.color = this.colorarray[this.index];
      //this.renderer.setElementStyle(this.element.nativeElement,'color',this.colorarray[this.index]);
      this.index++;
  }
  @HostBinding('style.color') get setColor(){
    return this.color;
  }
}
