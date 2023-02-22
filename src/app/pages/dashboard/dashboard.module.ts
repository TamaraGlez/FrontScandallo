
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { EscandalloFormEditComponent } from 'src/app/components/escandallo-form-edit/escandallo-form-edit.component';
import { PopupComponent } from 'src/app/shared/popup/popup.component';


@NgModule({
  declarations: [
    DashboardComponent,
    EscandalloFormEditComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
  }
 
