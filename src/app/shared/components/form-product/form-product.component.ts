import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Iproducts } from '../../interfaces/iproducts';
import { Ivariety } from '../../interfaces/ivariety';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  public listProducts!: Iproducts[]
  public listVariety!: Ivariety[]
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
  }
}
