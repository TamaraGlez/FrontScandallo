import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscandalloFormEditComponent } from 'src/app/components/escandallo-form-edit/escandallo-form-edit.component';
import { FormProductComponent } from 'src/app/shared/components/form-product/form-product.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path:"", component: DashboardComponent,
  }, 
  {
    path: ":id", component: EscandalloFormEditComponent
  },
  {
    path: "edit/:id", component: EscandalloFormEditComponent
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
