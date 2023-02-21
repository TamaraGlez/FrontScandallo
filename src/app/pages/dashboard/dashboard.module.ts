import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormProductComponent } from 'src/app/shared/components/form-product/form-product.component';


@NgModule({
  declarations: [
    DashboardComponent,
    FormProductComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
