import { OrderResponse } from './order.response';

export class DeliverResponse {
  id: number;
  name: string;
  shop: string;
  orderCount: number;
  orders?: OrderResponse[];
  payPalUrl: string;
}
