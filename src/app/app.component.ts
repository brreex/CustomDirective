import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  hobbies:Array<string> = ["Watch Movie","Play Video Game","Listen To Music"];
}
