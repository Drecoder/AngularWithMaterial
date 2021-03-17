import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheBasicComponent } from './get-a-quote/the-basic/the-basic.component';
import { TryForYourselfComponent } from './login/try-for-yourself/try-for-yourself.component';

const routes: Routes = [
 { path:'the-basic', component: TheBasicComponent},
 { path:'login', component: TryForYourselfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
