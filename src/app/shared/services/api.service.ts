import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEscandallo } from 'src/app/interfaces/i-escandallos';
import { Idefects } from '../interfaces/idefects';
import { Observable } from 'rxjs';

import { Iproducts } from '../interfaces/iproducts';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public headers = {headers: new HttpHeaders ({
    Authorization: 'Bearer ' + localStorage.getItem ('token'),
  })}

  // public url= 'http://escandallos-back.vercel.app/'
  public url= 'http://localhost:3000/'

  defect: Idefects = {

    title: '',
    image: '',
    description: ''

  }

  id: number = 0;


  constructor(private http: HttpClient) { }



  //*-------------ESCANDALLOS--------------------------------------------

  getAllEscandallos():Observable<any> {
    return this.http.get(this.url + 'escandallos', this.headers)
  }

  getEscandalloById(escandalloId: any):Observable<any> {
    return this.http.get(this.url + 'escandallos/' + escandalloId, this.headers)
  }

  createEscandallo(newEscandallo:IEscandallo):Observable<any> {
    return this.http.post(this.url + 'escandallos/create', newEscandallo, this.headers)
  }
  editEscandallo(escandalloId: string, editItem:IEscandallo):Observable<any> {
    return this.http.put(this.url + 'escandallos/' + escandalloId, editItem, this.headers)
  }
  deleteEscandallo(escandalloId: string):Observable<any> {
    return this.http.delete(this.url + 'escandallos/' + escandalloId, this.headers)
  }


  //*--------------- DEFECTS ---------------------------------------------

  getAllDefects(): Observable<Idefects[]> {
    return this.http.get<Idefects[]>(this.url + 'defects', this.headers)
  }
  
  getDefectsById(id: number) {
    return this.http.get(this.url + id, this.headers);
  }


    //*--------------- PRODUCTS ---------------------------------------------

  getAllProducts():Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(this.url + 'products', this.headers)
  }

  getProductByCode(code:string): Observable<Iproducts> {
    return this.http.get<Iproducts>( this.url + 'products/' + code, this.headers)
  }


    //*--------------- VARIETIES ---------------------------------------------


  getAllVariety() {
    return this.http.get(this.url + 'varieties', this.headers)
  }

    //*--------------- PROVIDERS ---------------------------------------------

  getAllProviders() {
    return this.http.get(this.url + 'providers', this.headers)
  }

  getAllUsers(){
    return this.http.get(this.url + 'users', this.headers)
  }




}

