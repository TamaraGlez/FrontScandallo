import { Component, OnInit} from '@angular/core';
import { Iproducts } from 'src/app/shared/interfaces/iproducts';
import { ApiService } from 'src/app/shared/services/api.service';
import { Iproviders } from 'src/app/shared/interfaces/iproviders';
import { Ivariety } from 'src/app/shared/interfaces/ivariety';
import { Iusers } from 'src/app/shared/interfaces/iusers';

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

  constructor(private api: ApiService) {}

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

  }
}