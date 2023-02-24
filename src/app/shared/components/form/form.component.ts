import { Router } from '@angular/router';
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
  endPoint: string = "html";
  public item: any =
  {
    code: "AA",
    name: "jkdlkafj"
  }


  constructor(
    private form: FormBuilder,
    private api: ApiService,
    private route: Router
  ) {



  }

  ngOnInit(): void {
    this.addForm = this.form.group({
      code: ['',[Validators.required]],
      name: ['',[Validators.required]],
    });

    this.addForm.valueChanges.subscribe((data) => {
      this.add = data;
    });
    console.log(this.addForm)
    console.log(this.form)
  }

  addFormulary() {
    this.submited = true;
    if (this.addForm.valid) {
      let newForm: any = this.add;
      console.log(newForm)
       this.api.postFormulary(newForm).subscribe((res) => {
       console.log(res);
        this.addForm.reset();
        this.submited = false;
        this.route.navigate(["/index"])
     });
    }
  }
}
// addHotel() {
//   let newHotel: Ihotel = this.hotel;
//   console.log(newHotel);
//   newHotel.imageDetail = this.listado;


//   this.api.postHotel(newHotel).subscribe((response) => {
//     this.hotelForm.reset();
//     this.route.navigate(['/hotels']);
//   });
// }


