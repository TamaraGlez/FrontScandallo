import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Idefects } from 'src/app/shared/interfaces/idefects';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  public listDefects!: Idefects[];

  constructor(private api: ApiService, public auth: AuthService) {}

  ngOnInit(): void {
    this.api.getAllDefects().subscribe((results: any) => {
      this.listDefects = [...results];
      console.log(this.listDefects);
    });

  }
}


