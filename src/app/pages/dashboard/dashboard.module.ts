
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { EscandalloFormEditComponent } from 'src/app/shared/components/escandallo-form-edit/escandallo-form-edit.component';
import { PopupComponent } from 'src/app/shared/popup/popup.component';
import { FormProductComponent } from 'src/app/shared/components/form-product/form-product.component';



@NgModule({
  declarations: [
    DashboardComponent,
    EscandalloFormEditComponent,
    PopupComponent,
    FormProductComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
  }

