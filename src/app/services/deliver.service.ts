import { Injectable } from '@angular/core';
import { DataService } from './abstract.data.service';
import { DeliverRequest } from './requests/deliver.request';
import { DeliverResponse } from './responses/deliver.response';

@Injectable({
  providedIn: 'root'
})
export class DeliverService extends DataService<DeliverRequest, DeliverResponse> {
  url = `${this.url}deliveries`;
}
