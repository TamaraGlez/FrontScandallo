import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEscandallo } from 'src/app/interfaces/i-escandallos';
import { Idefects } from '../../interfaces/idefects';
import { Iproducts } from '../../interfaces/iproducts';
import { ApiService } from '../../services/api.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-escandallo-form-edit',
  templateUrl: './escandallo-form-edit.component.html',
  styleUrls: ['./escandallo-form-edit.component.css']
})
export class EscandalloFormEditComponent implements OnInit {

  public escandalloToEdit!:IEscandallo
  public id:any
  public listDefects!: Idefects[]
  public product!: Iproducts
  public calibers: string[] = []
  public editIsActive: boolean = false
  public slidervalue:number = 50

  constructor( private api: ApiService, private activateRoute: ActivatedRoute, private router: Router ){}


  ngOnInit(): void {
    this.api.getAllDefects().subscribe(data => {
      this.listDefects = data
    })

    this.activateRoute.paramMap.subscribe((param) => {
      this.id = param.get('id')
      this.api.getEscandalloById(this.id).subscribe((data: IEscandallo) => {
        this.escandalloToEdit = {...data}
        console.log(this.escandalloToEdit);

        this.api.getProductByCode(this.escandalloToEdit.product).subscribe(data => {
          this.product = data
          this.product.calibers.forEach( (cal: {ref: string, size: string}) => {
            this.calibers = [ ...this.calibers, cal.ref]
          })
        })
      })
    })


    
  }

  activeEdit(){
    this.editIsActive = true
  }
  
}
