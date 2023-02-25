import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { IAdd } from '../../interfaces/iadd';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',

})
export class FormComponent implements OnInit {

  addForm!: FormGroup;
  add!: IAdd;
  submited: boolean = false;
  formToPrint!: string | null


  constructor(
    private form: FormBuilder,
    private api: ApiService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.formToPrint = params.get("form")
    })

    if (this.formToPrint === 'catalogue') {

      this.addForm = this.form.group({

        title: ['',[Validators.required]],
        image: ['',],
        descripcion:['',],
        producto: ['',]

      });
    }

    if (this.formToPrint === 'users') {
      this.addForm = this.form.group({

        userName: ['',[Validators.required]],
        password: ['',[Validators.required]],
        warehouse: ['',[Validators.required]],
        rol: ['',]

      });
    }

    if (this.formToPrint === 'products') {
      this.addForm = this.form.group({

        name: ['',[Validators.required]],
        code: ['',[Validators.required]]

      });
    }

    if (this.formToPrint === 'providers') {
      this.addForm = this.form.group({

        name: ['',[Validators.required]],
        code: ['',[Validators.required]]

      });
    }


    if (this.formToPrint === 'varieties') {
      this.addForm = this.form.group({

        name: ['',[Validators.required]],
        productRef: ['',[Validators.required]]

      });
    }

    if (this.formToPrint === 'warehouse') {
      this.addForm = this.form.group({

        name: ['',[Validators.required]],
        code: ['',[Validators.required]]

      });
    }


    this.addForm.valueChanges.subscribe((data) => {
      this.add = data;
      console.log(data)
    });

    console.log(this.addForm)
    console.log(this.form)
  }



  addContent(e:any) {
    //para evitar que el botón submit recargue
    e.preventDefault()
    console.log(this.addForm.value)
    this.submited = true;

    if (this.addForm.valid) {
      let newForm: IAdd = this.add;

    if (this.formToPrint === "users"){
       this.api.postUsers(newForm).subscribe((res) => {
        console.log(res)
     })};

     if (this.formToPrint === "products"){
      this.api.postProducts(newForm).subscribe((res) => {
        console.log(res)
    })};

    if (this.formToPrint === "varieties"){
      this.api.postVariety(newForm).subscribe((res) => {
        console.log(res)
    })};

    if (this.formToPrint === "catalogue"){
      this.api.postCatalogue(newForm).subscribe((res) => {
        console.log(res)
    })};

    if (this.formToPrint === "warehouses"){
      this.api.postWarehouses(newForm).subscribe((res) => {
        console.log(res)
    })};

    if (this.formToPrint === "providers"){
      this.api.postProviders(newForm).subscribe((res) => {
    })};

     this.addForm.reset();
     this.submited = false;
     this.route.navigate(["/index"])
    }

  }

}








