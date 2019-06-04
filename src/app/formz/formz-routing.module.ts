import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormzComponent } from './formz.component';

const routes: Routes = [
  { path: 'forms', component: FormzComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormzRoutingModule { }
