import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormzComponent } from './formz.component';
import { FormzRoutingModule } from './formz-routing.module';

@NgModule({
  declarations: [FormzComponent],
  imports: [
    CommonModule,
    FormzRoutingModule
  ],
  exports: [FormzComponent]
})
export class FormzModule { }
