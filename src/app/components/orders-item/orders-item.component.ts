import { Component, OnInit, Input } from '@angular/core';
import { OrderResponse } from '@services/responses/order.response';

@Component({
  selector: 'itslunch-orders-item',
  templateUrl: './orders-item.component.html'
})
export class OrdersItemComponent implements OnInit {
  @Input() item: OrderResponse;

  constructor() { }

  ngOnInit() {
  }

}
