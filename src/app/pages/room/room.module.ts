import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { DrawComponent } from '../../shared/components/draw/draw.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RoomComponent,
    DrawComponent
  ],
  imports: [
  
CommonModule,
    RoomRoutingModule,
    FormsModule
  ]
})
export class RoomModule { }
