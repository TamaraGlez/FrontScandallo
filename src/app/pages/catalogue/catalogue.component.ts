import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  public listDefects!: any[];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllDefects().subscribe((results: any) => {
      this.listDefects = [...results];
      console.log(this.listDefects);
    });

    // this.api.getData().subscribe((resultado: any)=> this.data =([...resultado]))}
    // console.log(data)
  }
}
