import { Component, OnInit } from '@angular/core';
import { DeliverService } from '@services/deliver.service';

@Component({
  selector: 'itslunch-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private deliverService: DeliverService) { }

  public buyers$ = this.deliverService.getAll();

}
