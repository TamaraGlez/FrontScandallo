import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigureRoutingModule } from './configure-routing.module';
import { ConfigureComponent } from './configure.component';


@NgModule({
  declarations: [
    ConfigureComponent,
  
  ],
  imports: [
    CommonModule,
    ConfigureRoutingModule
  ]
})
export class ConfigureModule { }
