import { DeliverService } from 'src/app/services';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'itslunch-deliver',
  templateUrl: './deliver.component.html'
})
export class DeliverComponent {
  constructor(
    private deliverService: DeliverService,
    private router: Router
  ) { }

  public buyers$ = this.deliverService.getAll();

  selectOrder(id: number) {
    this.router.navigate([`/deliver/${id}`]);
  }
}
