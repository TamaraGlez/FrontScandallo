import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/shared/services/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
