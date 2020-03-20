import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { DeliverComponent } from './deliver/deliver.component';
import { CardComponent } from './card/card.component';
import { NewDeliverServiceComponent } from './new-deliver-service/new-deliver-service.component';
import { DeliverOverviewComponent } from './deliver-overview/deliver-overview.component';

export const containers: any[] = [
  DeliverComponent,
  HomeComponent,
  OrderComponent,
  CardComponent,
  NewDeliverServiceComponent,
  DeliverOverviewComponent
];

export * from './home/home.component';
export * from './order/order.component';
export * from './deliver/deliver.component';
export * from './card/card.component';
export * from './new-deliver-service/new-deliver-service.component';
export * from './deliver-overview/deliver-overview.component';
