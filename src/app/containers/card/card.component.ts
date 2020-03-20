import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'itslunch-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() title = '';

  constructor() { }

  ngOnInit() {
  }

}
