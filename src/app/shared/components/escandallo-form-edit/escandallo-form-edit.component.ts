import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEscandallo, IEscandalloDB } from 'src/app/interfaces/i-escandallos';
import { Idefects } from '../../interfaces/idefects';
import { Iproducts } from '../../interfaces/iproducts';
import { ApiService } from '../../services/api.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-escandallo-form-edit',
  templateUrl: './escandallo-form-edit.component.html',
  styleUrls: ['./escandallo-form-edit.component.css'],
})
export class EscandalloFormEditComponent implements OnInit {
  public escandalloToEdit!: IEscandalloDB
  public editItem!: IEscandalloDB;
  public id: any;
  public listDefects!: Idefects[];
  public product!: Iproducts;
  public calibers: string[] = [];

  public editIsActive: any = { brix: false, pn: false };
  public slidervalue: number = 50;
  public dataInputBrix: any = '';
  public dataInputPn: any = '';
  escandalloForm!: FormGroup;
  submitted: boolean = false;
  isFormValid: boolean = false

  constructor(
    private api: ApiService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private form: FormBuilder
  ) {}

  selecteDefects: string[] = [];
  selecteDefect: string = '';
  messageDefect: string = '';

  ngOnInit(): void {
    this.api.getAllDefects().subscribe((data) => {
      this.listDefects = data;
      console.log(this.listDefects);
    });

    this.activateRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');

      this.api.getEscandalloById(this.id).subscribe((data: IEscandalloDB) => {
        this.escandalloToEdit = { ...data };
        console.log(this.escandalloToEdit);

        this.selecteDefects = this.escandalloToEdit.defects
          
        this.createForm();

        this.api
          .getProductByCode(this.escandalloToEdit.product)
          .subscribe((data) => {
            this.product = data;
            this.product.calibers.forEach(
              (cal: { ref: string; size: string }) => {
                this.calibers = [...this.calibers, cal.ref];
              }
            );
          });
      });
    });
  }

  createForm() {
    this.escandalloForm = this.form.group({
      ref: new FormControl(this.escandalloToEdit.ref),
      provider: new FormControl(this.escandalloToEdit.provider),
      product: new FormControl(this.escandalloToEdit.product),
      variety: new FormControl(this.escandalloToEdit.variety),
      data: new FormGroup({
        brix: new FormControl(''),
        firmness: new FormControl(''),
        caliberRef1: new FormControl(''),
        percentage1: new FormControl(''),
        caliberRef2: new FormControl(''),
        percentage2: new FormControl(''),
      }),
      MediaBrix: new FormControl(this.escandalloToEdit.MediaBrix),
      MediaFirmness: new FormControl(this.escandalloToEdit.MediaFirmness),
      defects: new FormControl(this.selecteDefects),
      photos: new FormControl(''),
      qualityIndicator: new FormControl(''),
      comments: new FormControl(''),
    });

    this.escandalloForm.valueChanges.subscribe((data) => {
      this.editItem = {
        ...data,
        data: {
          brix: this.escandalloToEdit.data.brix,
          firmness: this.escandalloToEdit.data.firmness,
          caliberRef1: data.data.caliberRef1,
          percentage1: data.data.percentage1,
          caliberRef2: data.data.caliberRef2,
          percentage2: data.data.percentage2,
        },
        MediaBrix:this.escandalloToEdit.MediaBrix,
        MediaFirmness:this.escandalloToEdit.MediaFirmness,
        // defects: this.selecteDefects,
      };
      console.log(this.editItem);
      
    });
  }

  editEscandallo() {

    this.submitted = true;
    if (this.escandalloForm.valid) {
      let newEscandallo: IEscandallo =  this.editItem

      console.log("POST => ",newEscandallo);

      this.api.editEscandallo(this.id, newEscandallo).subscribe((response) => {
        console.log("BACK => ",response);
        this.escandalloForm.reset();
        this.submitted = false;
        this.router.navigate(['/index']);
      });
    }
  }
  makeFormValid(){
    this.isFormValid = true
  }
  activeEdit(field: string) {
    this.editIsActive[field] = true;
  }

  calcMedia(array: number[]): any {
    let media =
      array.reduce((accumulator: number, current: number) => {
        return accumulator + current;
      }, 0) / array.length;
    return media.toFixed(1);
  }

  addData(field: string, data: any) {
    if (field === 'brix') {
      this.escandalloToEdit.data.brix = [
        ...this.escandalloToEdit.data.brix,
        Number(this.dataInputBrix),
      ];
      this.dataInputBrix = '';
      this.escandalloToEdit.MediaBrix = this.calcMedia(
        this.escandalloToEdit.data.brix
      );
    }
    if (field === 'pn') {
      this.escandalloToEdit.data.firmness = [
        ...this.escandalloToEdit.data.firmness,
        Number(this.dataInputPn),
      ];
      this.dataInputPn = '';
      this.escandalloToEdit.MediaFirmness = this.calcMedia(
        this.escandalloToEdit.data.firmness
      );
    }
  }

  save(field: string, event: any) {
    this.addData(field, event.target.value);
    event.target.value = '';
  }

  editData(event: any, index: number, field: string) {
    const edit: any = {
      brix: () => {
        this.escandalloToEdit.data.brix[index] = Number(event.target.value);
        this.escandalloToEdit.MediaBrix = this.calcMedia(
          this.escandalloToEdit.data.brix
        );
        this.editIsActive.brix = false;
      },
      pn: () => {
        this.escandalloToEdit.data.firmness[index] = Number(event.target.value);
        this.editIsActive.pn = false;
        this.escandalloToEdit.MediaFirmness = this.calcMedia(
          this.escandalloToEdit.data.firmness
        );
      },
    };
    return edit[field]();
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
    this.selecteDefects.splice(index, 1);
    console.log(this.selecteDefects);
  }
}
