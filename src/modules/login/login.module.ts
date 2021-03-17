import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TryForYourselfComponent } from 'src/app/login/try-for-yourself/try-for-yourself.component';



@NgModule({
  declarations: [TryForYourselfComponent],
  imports: [
    CommonModule,
    TryForYourselfComponent
  ]
})
export class LoginModule { }
