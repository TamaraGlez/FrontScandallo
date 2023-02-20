import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idefects } from '../interfaces/idefects';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  defect: Idefects = {

    title: '',
    image: '',
    description: ''

  }

  id: number = 0;

  public url = 'http://escandallos-back.vercel.app/'
  constructor(private http: HttpClient) { }

  getAllDefects() {
    return this.http.get(this.url + 'defects')

  }

  getDefectsById(id: number) {
    return this.http.get(this.url + id);

  }

  getAllProducts() {
    return this.http.get(this.url + 'products')

  }

  getAllVariety() {
    return this.http.get(this.url + 'varieties')
  }

}

