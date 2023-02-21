import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from 'src/app/shared/components/form-product/form-product.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path:"",component:DashboardComponent
  },
  {
    path:"nuevo",component:FormProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
