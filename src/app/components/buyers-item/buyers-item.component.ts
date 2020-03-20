import { Component, OnInit, Input } from '@angular/core';
import { BuyersResponse } from 'src/app/services/responses/buyers.response';

@Component({
  selector: 'itslunch-buyers-item',
  templateUrl: './buyers-item.component.html'
})
export class BuyersItemComponent implements OnInit {
  @Input() item: BuyersResponse;

  constructor() { }

  ngOnInit() { }

}
