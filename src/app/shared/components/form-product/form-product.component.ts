import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Iproducts } from '../../interfaces/iproducts';
import { Iproviders } from '../../interfaces/iproviders';
import { Ivariety } from '../../interfaces/ivariety';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  public listProducts!: Iproducts[]
  public listVariety!: Ivariety[]
  public listProviders!: Iproviders[]
  public listVarietyFiltered!: Ivariety[];
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
   
  }

  setCode(value:string) {
   
    this.listVarietyFiltered = this.listVariety.filter((variety) => variety.productRef === value)
    
  }
}
