import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'itslunch-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../scss/main.scss']
})
export class AppComponent {
  title = 'it-is-lunch-time';
}
