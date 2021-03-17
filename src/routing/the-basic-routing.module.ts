import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheBasicComponent } from 'src/app/get-a-quote/the-basic/the-basic.component';


const routes: Routes = [
  {
    path: '',
    component: TheBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheBasicRoutingModule { }
