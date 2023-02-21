import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", loadChildren: () => import('./pages/dashboard/dashboard.module').then((m)=>m.DashboardModule)},
  {path:"catalogue", loadChildren: () => import('./pages/catalogue/catalogue.module').then((m)=>m.CatalogueModule)},
  {path:"about", loadChildren: () => import('./pages/about/about.module').then((m)=>m.AboutModule)},
  {path:"login", loadChildren: () => import('./pages/login/login.module').then((m)=>m.LoginModule)},
  {path:"register", loadChildren: () => import('./pages/register/register.module').then((m)=>m.RegisterModule)},
  {path:"home", loadChildren: () => import('./pages/home/home.module').then((m)=>m.HomeModule)},
  {path:":room", loadChildren: () => import('./pages/room/room.module').then((m)=>m.RoomModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
