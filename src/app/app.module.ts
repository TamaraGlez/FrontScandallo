import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/shared/services/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    NavComponent, 
    FooterComponent
  ],
  imports: [

  
  BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule

=======
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule
    
>>>>>>> 20092168d6466e760a033762b498d17e08ae6815
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule {}
