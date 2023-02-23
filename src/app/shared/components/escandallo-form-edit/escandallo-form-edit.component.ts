import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEscandallo } from 'src/app/interfaces/i-escandallos';
import { Idefects } from '../../interfaces/idefects';
import { Iproducts } from '../../interfaces/iproducts';
import { ApiService } from '../../services/api.service';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
  public addBrixIsActive: boolean = false
  public addPnIsActive: boolean = false
  public slidervalue:number = 50

  constructor( private api: ApiService, private activateRoute: ActivatedRoute, private router: Router ){}

  selecteDefects: string[] = [];
  selecteDefect: string = '';
  messageDefect: string = '';


  ngOnInit(): void {
    this.api.getAllDefects().subscribe(data => {
      this.listDefects = data
      console.log(this.listDefects);
    })

    this.activateRoute.paramMap.subscribe((param) => {
      this.id = param.get('id')

      this.api.getEscandalloById(this.id).subscribe((data: IEscandallo) => {
        this.escandalloToEdit = {...data}
        console.log(this.escandalloToEdit);

        this.api.getProductByCode(this.escandalloToEdit.product).subscribe(data => {
          console.log(data);
          
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

  addInput(parameter: string, action:string){

    const add:any = {
      brix: () => { action === 'open' ? this.addBrixIsActive = true : this.addBrixIsActive = false},
      pn: () => {  action === 'open' ? this.addPnIsActive = true : this.addBrixIsActive = false }
    }

    return add[parameter]()
  }

  saveSelecction() {
    if (this.selecteDefects.includes(this.selecteDefect)) {
      alert('Ya ha seleccionado esa opción');
      return;
    }
      if (this.selecteDefect) {

        this.selecteDefects.push(this.selecteDefect);
        console.log(this.selecteDefect);
        this.selecteDefect = '';
        
      }
  }

  deleteDefect(defect: string, index: number) {
    
    this.selecteDefects.splice(index, 1)
    console.log(this.selecteDefects);
  }
  
}
