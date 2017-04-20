import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { UpperDirective } from './upper.directive';
import { MycolorDirective } from './mycolor.directive';
import { MyvisibilityDirective } from './myvisibility.directive';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    UpperDirective,
    MycolorDirective,
    MyvisibilityDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
