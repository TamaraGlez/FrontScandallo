import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { IAdd } from '../../interfaces/iadd';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',

})
export class FormComponent implements OnInit {

  addForm!: FormGroup;
  add!: IAdd;
  submited: boolean = false;
  formToPrint!: string | null


  // public item: any =
  // {
  //   name: "string",
  //   flesh: "string",
  //   code: "string",
  //   isActive:" boolean"

  // }


  constructor(
    private form: FormBuilder,
    private api: ApiService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {



  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.formToPrint = params.get("form")
    })

    if (this.formToPrint === 'catalogue') {
      // aqui ponemos lo que vaya en el formulario
      this.addForm = this.form.group({

        code: ['',[Validators.required]],
        name: ['',[Validators.required]],

      });
    }

    if (this.formToPrint === 'users') {
      // aqui ponemos lo que vaya en el formulario
      this.addForm = this.form.group({

        userName: ['',[Validators.required]],
        password: ['',[Validators.required]],
        warehouse: ['',[Validators.required]],
        rol: ['',[Validators.required]]

      });
    }

    if (this.formToPrint === 'products') {
      // aqui ponemos lo que vaya en el formulario
      this.addForm = this.form.group({

        name: ['',[Validators.required]],
        code: ['',[Validators.required]]

      });
    }

    if (this.formToPrint === 'providers') {
      // aqui ponemos lo que vaya en el formulario
      this.addForm = this.form.group({

        name: ['',[Validators.required]],
        productRef: ['',[Validators.required]]

      });
    }


    if (this.formToPrint === 'warehouse') {
      // aqui ponemos lo que vaya en el formulario
      this.addForm = this.form.group({

        name: ['',[Validators.required]],
        code: ['',[Validators.required]]

      });
    }



    this.addForm.valueChanges.subscribe((data) => {
      this.add = data;
    });
    console.log(this.addForm)
    console.log(this.form)
  }



    addContent(e:any) {
      e.preventDefault()
      console.log(this.addForm.value)
    }
}

  // addFormulary() {
  //   this.submited = true;
  //   if (this.addForm.valid) {
  //     let newForm: IAdd = this.add;
  //     console.log(newForm, )
  //      this.api.postFormulary(newForm, ).subscribe((res) => {
  //      console.log(res);
  //      console.log(this.endPoint)
  //       this.addForm.reset();
  //       this.submited = false;
  //       this.route.navigate(["/index"])
  //    });
  //   }
  // }

