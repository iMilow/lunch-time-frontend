import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    MatStepperModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  exports: [
    MatStepperModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [
  ]
})
export class AngularMaterialModule { }
