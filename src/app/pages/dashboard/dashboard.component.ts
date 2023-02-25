import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { IEscandallo } from 'src/app/shared/interfaces/i-escandallos';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public listEscandallos!: IEscandallo[];
  public listFiltered!: IEscandallo[];
  public listProducts: any[] = []
  public filters: string[] = []

  public popupDelete = {
    isActive: false,
    info: {
      _id: "",
      item: "",
      name: "",
      ref: 0
    },
    title: 'Eliminar',
    body: 'Estas seguro de querer eliminarlo?',
    action: (id: string) => {
        this.api.deleteEscandallo(id).subscribe((data: IEscandallo) => {
          console.log("ESCANDALLO BORRADO => ", data);
        })
      this.listFiltered = this.listEscandallos?.filter( escandallo => escandallo._id !== id )
      this.listEscandallos = this.listFiltered
      this.popupDelete.isActive = false
    },
    cancel: () => {this.popupDelete.isActive = false}
  }

  constructor(private api: ApiService) {}

  media(array: number[]): any {
    let media =
      array.reduce((accumulator: number, current: number) => {
        return accumulator + current;
      }, 0) / array.length;

    return media.toFixed(1);
  }

  ngOnInit(): void {

    this.api.getAllEscandallos().subscribe((data: IEscandallo[]) => {
      this.listEscandallos = [ ...data ];
      this.listFiltered = [ ...data ];

      this.listEscandallos =  this.listEscandallos.map((escandallo) => {
        let brixArr: number[] = escandallo.data.brix;
        let firmnessArr: number[] = escandallo.data.firmness;
        let mediaBrix = this.media(brixArr);
        let mediaFirm = this.media(firmnessArr);

        return escandallo = {
          ...escandallo,
          MediaBrix: mediaBrix,
          MediaFirmness: mediaFirm,
        };
      });
      console.log(this.listEscandallos);


      this.api.getAllProducts().subscribe((data: any[]) => {
        console.log(data);
        this.listProducts = [...data]
      })
    });

  }


  filter(productCode: string) {
    if (this.filters.includes(productCode)) {
      this.filters = this.filters.filter( filter => filter !== productCode)
    } else { this.filters = [ ...this.filters, productCode ] }
    console.log(this.filters);

    if (this.filters.length === 0) {
      this.listFiltered = this.listEscandallos
    } else {
      this.listFiltered = []
      this.listEscandallos.forEach( escandallo => {
        if (this.filters.some( filter => filter === escandallo.product)){
          this.listFiltered = [ ...this.listFiltered, escandallo]
        }
      })
    }
  }

  clearFilter(){
    this.filters = []
    this.listFiltered = this.listEscandallos
  }

  openModal(escandallo:IEscandallo){
    this.popupDelete.isActive = true
    this.popupDelete.info = {
      _id: escandallo._id,
      item: "escandallo",
      name: escandallo.product,
      ref: escandallo.ref
    }
    console.log(this.popupDelete);
  }

  cancelModal (value: boolean) {
    this.popupDelete.isActive = value
  }

  updateList(id: string){
    console.log(id);
    console.log(this.listFiltered);

    this.listFiltered = this.listFiltered.filter( escandallo => {
      return escandallo._id !== id
    })
    console.log(this.listFiltered);
  }

}

