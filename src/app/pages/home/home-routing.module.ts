import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawComponent } from 'src/app/shared/components/draw/draw.component';
import { HomeComponent } from './home.component';

const routes: Routes = [{path: ':room', component: DrawComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
