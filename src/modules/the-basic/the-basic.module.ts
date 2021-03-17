import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheBasicRoutingModule } from 'src/routing/the-basic-routing.module';
import { TheBasicComponent } from 'src/app/get-a-quote/the-basic/the-basic.component';


@NgModule({
  declarations: [TheBasicComponent],
  imports: [
    CommonModule,
    TheBasicRoutingModule

  ]
})
export class TheBasicModule { }
