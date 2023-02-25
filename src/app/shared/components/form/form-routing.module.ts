import { FormProductComponent } from 'src/app/shared/components/form-product/form-product.component';
import { FormComponent } from '../form/form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ":form", component: FormComponent
  },
  {
    path:"nuevo",component:FormProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
