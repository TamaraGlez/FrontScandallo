import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';
import { FormsModule } from '@angular/forms';
import { EscandalloFormEditComponent } from 'src/app/shared/components/escandallo-form-edit/escandallo-form-edit.component';


@NgModule({
  declarations: [
    CatalogueComponent,
    EscandalloFormEditComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    FormsModule
  ]
})
export class CatalogueModule { }
