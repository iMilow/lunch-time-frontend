import { OrderRequest } from './order.request';

export class DeliverRequest {
  id: number;
  name: string;
  shop: string;
  orderCount: number;
  orders?: OrderRequest[];
  payPalUrl: string;
}
