import { IEscandallo } from 'src/app/shared/interfaces/i-escandallos';
import { IAdd } from './../../interfaces/iadd';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Iproducts } from '../../interfaces/iproducts';
import { Iproviders } from '../../interfaces/iproviders';
import { Ivariety } from '../../interfaces/ivariety';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent implements OnInit {
  public listProducts!: Iproducts[];
  public listVariety!: Ivariety[];
  public listProviders!: Iproviders[];
  public listVarietyFiltered!: Ivariety[];
  public addNewForm!: FormGroup;
  public addNew!: any

  constructor(
    private api: ApiService,
    private form: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute

    ) {}

  ngOnInit(): void {
    this.api.getAllProducts().subscribe((results: any) => {
      this.listProducts = [...results];
      console.log(this.listProducts);
    });

    this.api.getAllVariety().subscribe((results: any) => {
      this.listVariety = [...results];
      console.log(this.listVariety);
    });

    this.api.getAllProviders().subscribe((results: any) => {
      this.listProviders = [...results];
      console.log(this.listProviders);
    });

    this.addNewForm = this.form.group({
      ref: ['', [Validators.required]],
      product: new FormControl(''),
      variety: [''],
      provider: ['']
    });

    this.addNewForm.valueChanges.subscribe((data) => {
      this.addNew = data;
      console.log(data)
    });


  }

  submitForm() {
    console.log(this.addNewForm.value)
    if(this.addNewForm.valid) {
      let newForm: IEscandallo = this.addNew

      this.api.postEscandallo(newForm).subscribe((res) => {
        console.log(res)

        this.addNewForm.reset();
        this.router.navigate(["/index"]);
      })
    //  this.submited = false;
    //  this.route.navigate(["/index"])
    }
  }
  nextForm() {
    console.log(this.addNewForm.value)
    if(this.addNewForm.valid) {
      let newForm: IEscandallo = this.addNew

      this.api.postEscandallo(newForm).subscribe((res) => {
        console.log(res)

        this.addNewForm.reset();
        this.router.navigate([`/index/edit/${res._id}`]);
      })
    //  this.submited = false;
    //  this.route.navigate(["/index"])
    }
  }

  setCode(value: string) {
    this.listVarietyFiltered = this.listVariety.filter(
      (variety) => variety.productRef === value
    );
  }
}
