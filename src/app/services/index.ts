import { OrderService } from './order.service';
import { DeliverService } from './deliver.service';

export const services: any[] = [
  OrderService,
  DeliverService
];

export * from './order.service';
export * from './deliver.service';
