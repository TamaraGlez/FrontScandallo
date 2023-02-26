import { Component, Input, Output, EventEmitter, OnInit  } from '@angular/core';
import { IEscandallo } from 'src/app/shared/interfaces/i-escandallos';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{

  @Input() public popupInfo!: any
  // @Output() toggleEvent = new EventEmitter()
  // @Output() itemDeleted = new EventEmitter()

  constructor( public api: ApiService){}

  ngOnInit(): void {

  }


  // cancelar(value:boolean){
  //   this.toggleEvent.emit(value)
  // }


}


