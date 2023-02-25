import { IAdd } from './../interfaces/iadd';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEscandallo } from 'src/app/shared/interfaces/i-escandallos';
import { Idefects } from '../interfaces/idefects';
import { Observable } from 'rxjs';
import { Iwarehouses } from 'src/app/shared/interfaces/iwarehouses';
import { Iproducts } from '../interfaces/iproducts';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public headers = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
    }),
  };

  // public url = 'https://escandallos-back.vercel.app/';
  public url = 'http://localhost:3000/';

  defect: Idefects = {
    title: '',
    image: '',
    description: '',
  };

  id: number = 0;

  constructor(private http: HttpClient) {}

  //*-------------ESCANDALLOS--------------------------------------------

  getAllEscandallos(): Observable<any> {
    return this.http.get(this.url + 'escandallos', this.headers);
  }

  getEscandalloById(escandalloId: any): Observable<any> {
    return this.http.get(
      this.url + 'escandallos/' + escandalloId,
      this.headers
    );
  }

  createEscandallo(newEscandallo: IEscandallo): Observable<any> {
    return this.http.post(
      this.url + 'escandallos/create',
      newEscandallo,
      this.headers
    );
  }
  editEscandallo(escandalloId: string, editItem: IEscandallo): Observable<any> {
    return this.http.put(
      this.url + 'escandallos/' + escandalloId,
      editItem,
      this.headers
    );
  }
  deleteEscandallo(escandalloId: string): Observable<any> {
    return this.http.delete(
      this.url + 'escandallos/' + escandalloId,
      this.headers
    );
  }

  //*--------------- WAREHOUSES ---------------------------------------------

  getAllWarehouses(): Observable<Iwarehouses[]> {
    return this.http.get<Iwarehouses[]>(this.url + 'warehouses', this.headers);
  }

  //*--------------- DEFECTS ---------------------------------------------

  getAllDefects(): Observable<Idefects[]> {
    return this.http.get<Idefects[]>(this.url + 'defects', this.headers);
  }

  getDefectsById(id: number) {
    return this.http.get(this.url + id, this.headers);
  }

  //*--------------- PRODUCTS ---------------------------------------------

  getAllProducts(): Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(this.url + 'products', this.headers);
  }

  getProductByCode(code: string): Observable<Iproducts> {
    return this.http.get<Iproducts>(
      this.url + 'products/' + code,
      this.headers
    );
  }

  //*--------------- VARIETIES ---------------------------------------------

  getAllVariety() {
    return this.http.get(this.url + 'varieties', this.headers);
  }

  //*--------------- PROVIDERS ---------------------------------------------

  getAllProviders() {
    return this.http.get(this.url + 'providers', this.headers);
  }

  getAllUsers() {
    return this.http.get(this.url + 'users', this.headers);
  }

  // CREAR ELEMENTOS
  postProviders(add: IAdd): Observable<any> {
    console.log(add);
    return this.http.post(this.url + 'providers/create', add, this.headers);
  }
  postCatalogue(add: IAdd): Observable<any> {
    console.log(add);
    return this.http.post(this.url + 'catalogue/create', add, this.headers);
  }

  postProducts(add: IAdd): Observable<any> {
    console.log(add);
    return this.http.post(this.url + 'products/create', add, this.headers);
  }

  postVariety(add: IAdd): Observable<any> {
    console.log(add);
    return this.http.post(this.url + 'varieties/create', add, this.headers);
  }

  postUsers(add: IAdd): Observable<any> {
    console.log(add);
    return this.http.post(this.url + '/', add, this.headers);
  }

  postWarehouses(add: IAdd): Observable<any> {
    console.log(add);
    return this.http.post(this.url + 'warehouses/create', add, this.headers);
  }

  // post( add: IAdd): Observable<any> {
  //   console.log(add)
  //   return this.http.post(this.url + "", add, this.headers);

  // }
}
