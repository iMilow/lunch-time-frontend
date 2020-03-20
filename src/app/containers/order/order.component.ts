import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DeliverService, OrderService } from 'src/app/services';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map, catchError, tap } from 'rxjs/operators';
import { DeliverResponse } from 'src/app/services/responses/deliver.response';
import { Router } from '@angular/router';

@Component({
  selector: 'itslunch-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  selectBuyerFormGroup: FormGroup;
  orderFormGroup: FormGroup;
  paymentFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private deliverService: DeliverService,
    private orderService: OrderService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  buyers: DeliverResponse[];
  selectedBuyer: DeliverResponse;

  ngOnInit() {
    // Init FormGroups
    this.selectBuyerFormGroup = this.fb.group({
      deliverId: ['', Validators.required]
    });

    this.orderFormGroup = this.fb.group({
      orderMessage: ['', Validators.required],
      name: ['', Validators.required],
      support: [false],
      payed: [false],
      price: ['']
    });

    this.paymentFormGroup = this.fb.group({});

    // Get all buyers
    this.deliverService.getAll().subscribe(res => {
      this.buyers = res;
    });
  }

  orderNow() {
    const request = {
      ...this.selectBuyerFormGroup.value,
      ...this.orderFormGroup.value
    };

    this.orderService.post(request).pipe(
      tap(() => {
        this.toastrService.success('Bestellung wurde aufgegeben', 'Erfolgreich');
        this.router.navigate(['']);
      }),
      catchError(err => {
        this.toastrService.success('Fehler bei der Bestellung', 'Fehler');
        return of(err);
      })
    ).subscribe();
  }

  onSelectBuyer(id: any) {
    console.log('id?', id.value);
    this.selectedBuyer = this.buyers.find(b => b.id === id.value);
  }
}
