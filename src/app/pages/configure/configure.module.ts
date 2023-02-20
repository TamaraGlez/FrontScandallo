import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigureRoutingModule } from './configure-routing.module';
import { ConfigureComponent } from './configure.component';
import { FormProductComponent } from 'src/app/shared/components/form-product/form-product.component';


@NgModule({
  declarations: [
    ConfigureComponent,
    FormProductComponent
  ],
  imports: [
    CommonModule,
    ConfigureRoutingModule
  ]
})
export class ConfigureModule { }
