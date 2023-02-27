import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { IEscandallo, IEscandalloDB } from 'src/app/shared/interfaces/i-escandallos';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public listEscandallos!: IEscandalloDB[];
  public listFiltered!: IEscandalloDB[];
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
        this.api.deleteEscandallo(id).subscribe((data: IEscandalloDB) => {
          console.log("ESCANDALLO BORRADO => ", data);
        })
      this.listFiltered = this.listEscandallos?.filter( escandallo => escandallo._id !== id )
      this.listEscandallos = this.listFiltered
      this.popupDelete.isActive = false
    },
    cancel: () => {this.popupDelete.isActive = false}
  }

  constructor(private api: ApiService, public auth: AuthService) {}

  ngOnInit(): void {

    this.api.getAllEscandallos().subscribe((data: IEscandalloDB[]) => {
      this.listEscandallos = [ ...data ];
      this.listFiltered = [ ...data ];
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

  openModal(escandallo:IEscandalloDB){
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

