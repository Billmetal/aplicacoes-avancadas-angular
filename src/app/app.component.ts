import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    get title(): string {
      return "MY-TEST-APP";
    }
}
