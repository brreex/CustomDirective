import { Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {
  constructor(private templeate:TemplateRef<any>, private viewref:ViewContainerRef) {
  }
  @Input() set myvisibility (condition:boolean){
      if(condition)
        this.viewref.createEmbeddedView(this.templeate);
      else
       this.viewref.clear();
  }
}
