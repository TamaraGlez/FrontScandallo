import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEscandallo } from 'src/app/interfaces/i-escandallos';
import { Idefects } from '../../interfaces/idefects';
import { Iproducts } from '../../interfaces/iproducts';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';



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

  public editIsActive:any = {brix: false, pn:false}
  public addBrixIsActive: boolean = false
  public addPnIsActive: boolean = false
  public slidervalue:number = 50
  public dataInput: any = ''
  escandalloForm!: FormGroup;
  submitted: boolean = false;

  constructor( private api: ApiService, private activateRoute: ActivatedRoute, private router: Router, private form: FormBuilder ){}


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
          console.log(data);
          
          this.product = data
          this.product.calibers.forEach( (cal: {ref: string, size: string}) => {
            this.calibers = [ ...this.calibers, cal.ref]
          })
        })
      })
    })

    this.escandalloForm = this.form.group({

      ref: this.escandalloToEdit.ref,
      provider: this.escandalloToEdit.provider,
      product: this.escandalloToEdit.product,
      variety:  this.escandalloToEdit.variety,
    
      data: {
        brix:  [0],
        firmness: [0],
        sizeMain: {
          caliberRef: 'this.escandalloToEdit.',
          percentage: 0,
        },
        sizeSecond: {
          caliberRef: 'this.escandalloToEdit.',
          percentage: 0,
        },
      },
      photos: '',
      qualityIndicator: '',
      defects: [''],
      MediaBrix: 0,
      MediaFirmness: 0,
      comments: '',
    })

    this.escandalloForm.valueChanges.subscribe((data) => {
      this.escandalloToEdit = data;
    })
    
  }

  
  editEscandallo(){
    this.submitted = true;
    if(this.escandalloForm.valid){
      this.api.editEscandallo(this.id, this.escandalloToEdit).subscribe((response) => {
        console.log(response)
        this.escandalloForm.reset();
        this.submitted = false;
        this.router.navigate(["/index"])
      })
    }
    
  }
  
  activeEdit(field:string){
    this.editIsActive[field] = true
  }

  addInput(parameter: string, action:string){
    const add:any = {
      brix: () => { action === 'open' ? this.addBrixIsActive = true : this.addBrixIsActive = false},
      pn: () => {  action === 'open' ? this.addPnIsActive = true : this.addPnIsActive = false }
    }
    return add[parameter]()
  }

  calcMedia(array: number[]): any {
    let media = array.reduce((accumulator: number, current: number) => {
        return accumulator + current;
      }, 0) / array.length;
    return media.toFixed(1);
  }

  addData( field: string, data: any) {
    if (field === 'brix'){
      this.escandalloToEdit.data.brix = [ ...this.escandalloToEdit.data.brix, Number(this.dataInput) ]
      this.dataInput = ''
      this.escandalloToEdit.MediaBrix =  this.calcMedia(this.escandalloToEdit.data.brix)
    }
    if (field === 'pn') {
      this.escandalloToEdit.data.firmness = [ ...this.escandalloToEdit.data.firmness, Number(this.dataInput) ]
      this.dataInput = ''
      this.escandalloToEdit.MediaFirmness =  this.calcMedia(this.escandalloToEdit.data.firmness)
    }
  }

  save( field: string, event:any){
    console.log(event.target.value);
    this.addData(field, event.target.value)
    event.target.value = ''
  }

  editData(event:any, index:number, field:string){
    
    const edit: any = {
      brix: () => { 
        this.escandalloToEdit.data.brix[index] = Number(event.target.value)
        this.escandalloToEdit.MediaBrix =  this.calcMedia(this.escandalloToEdit.data.brix)
        this.editIsActive.brix = false 
        console.log(event.target.value, index, field, this.escandalloToEdit.data.brix);
      },
      pn: () => { 
        this.escandalloToEdit.data.firmness[index] = event.target.value
        this.editIsActive.pn = false  
      }
    }
   return edit[field]()
    
  }
}
