import { DeliverService } from 'src/app/services';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'itslunch-new-deliver-service',
  templateUrl: './new-deliver-service.component.html',
  styles: [`:host{position: relative; background-color: #575756}`]
})
export class NewDeliverServiceComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private deliverService: DeliverService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      shop: ['', Validators.required],
      payPalUrl: ['', Validators.required]
    });
  }

  onSubmit(request: any) {
    this.deliverService.post(request)
      .subscribe(
        res => {
          this.toastrService.success('Dienst wurde angeboten', 'Erfolgreich');
          this.router.navigate(['/']);
        }, err => {
          this.toastrService.error('Dienst ist fehlgeschlagen', 'Fehler');
        });
  }
}
