import { Component, OnInit} from '@angular/core';
import { Iproducts } from 'src/app/shared/interfaces/iproducts';
import { ApiService } from 'src/app/shared/services/api.service';
import { Iproviders } from 'src/app/shared/interfaces/iproviders';
import { Ivariety } from 'src/app/shared/interfaces/ivariety';
import { IUserDB, Iusers } from 'src/app/shared/interfaces/iusers';
import { Iwarehouses } from 'src/app/shared/interfaces/iwarehouses';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {
  public listProducts!: Iproducts[]
  public listVariety!: Ivariety[]
  public listProviders!: Iproviders[]
  public listUsers!: Iusers[]
  public listWarehouses!: Iwarehouses[]
  public rol: string =''

  constructor(private api: ApiService, public auth: AuthService) {}

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

    this.api.getAllUsers().subscribe((results: any) => {
      this.listUsers = [...results];
      console.log(this.listUsers);
    });

    this.api.getAllWarehouses().subscribe((results: any) => {
      this.listWarehouses = [...results];
      console.log(this.listWarehouses);
    });

    // this.rol = localStorage.getItem('user');
    


  }


}
