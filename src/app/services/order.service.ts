import { Injectable } from '@angular/core';
import { DataService } from './abstract.data.service';
import { OrderRequest } from './requests/order.request';
import { OrderResponse } from './responses/order.response';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends DataService<OrderRequest, OrderResponse> {
  url = `${this.url}orders`;
}
