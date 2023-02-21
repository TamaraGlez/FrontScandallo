import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/shared/services/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { EscandalloFormEditComponent } from './components/escandallo-form-edit/escandallo-form-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    EscandalloFormEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
