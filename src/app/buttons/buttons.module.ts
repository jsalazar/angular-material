import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsComponent } from './buttons.component';
import { ButtonsRoutingModule } from './buttons-routing.module';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ],
  exports: [ButtonsComponent]
})
export class ButtonsModule { }
