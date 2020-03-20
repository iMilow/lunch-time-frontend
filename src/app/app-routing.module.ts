import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports
import * as fromContainer from './containers';
import * as fromCommon from './common';

const routes: Routes = [
  {
    path: '',
    component: fromContainer.HomeComponent
  },
  {
    path: 'deliver',
    component: fromContainer.DeliverComponent,
    children: [
      { path: 'new', component: fromContainer.NewDeliverServiceComponent },
      { path: ':id', component: fromContainer.DeliverOverviewComponent }
    ]
  },
  {
    path: 'order',
    component: fromContainer.OrderComponent
  },
  {
    path: '**',
    component: fromCommon.NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
