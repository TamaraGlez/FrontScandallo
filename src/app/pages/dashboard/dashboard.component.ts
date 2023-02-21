import { Component, OnInit } from '@angular/core';
import { IEscandallo } from 'src/app/interfaces/i-escandallos';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public listEscandallos?: IEscandallo[];
  public listProducts?: any[]
  

  constructor(private api: ApiService) {}

  media(array: number[]): any {
    let media =
      array.reduce((accumulator: number, current: number) => {
        return accumulator + current;
      }, 0) / array.length;
    console.log(media);

    return media.toFixed(1);
  }

  ngOnInit(): void {

    this.api.getAllEscandallos().subscribe((data: IEscandallo[]) => {
      this.listEscandallos = data;

      this.listEscandallos =  this.listEscandallos.map((escandallo) => {
        let brixArr: number[] = escandallo.data.brix;
        let firmnessArr: number[] = escandallo.data.firmness;
        let mediaBrix = this.media(brixArr);
        let mediaFirm = this.media(firmnessArr);
        console.log(mediaBrix, mediaFirm);

        return escandallo = {
          ...escandallo,
          MediaBrix: mediaBrix,
          MediaFirmness: mediaFirm,
        };
      });
      console.log(this.listEscandallos);


      this.api.getAllProducts().subscribe((data: any[]) => {
        console.log(data);
        
      })
    });

    
  }
}

