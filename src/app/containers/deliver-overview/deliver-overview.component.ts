import { Component, OnInit } from '@angular/core';
import { DeliverService } from '@services/deliver.service';
import { ActivatedRoute } from '@angular/router';
import { DeliverResponse } from '@services/responses/deliver.response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'itslunch-deliver-overview',
  templateUrl: './deliver-overview.component.html'
})
export class DeliverOverviewComponent implements OnInit {
  public selectedDeliver: DeliverResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private deliverService: DeliverService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;

      if (id) {
        this.deliverService.get(id).subscribe(deliver => {
          this.selectedDeliver = deliver;
        });
      }
    });
  }

  onUpdateOrders() {
    const request = {
      ...this.selectedDeliver
    };

    this.deliverService.update(request).subscribe(res => {
      this.toastrService.success('Update war erfolgreich', 'Erfolgreich');
    }, err => {
      this.toastrService.error('Update fehlgeschlagen', 'Fehler');
    });
  }
}
