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

  public url= 'http://escandallos-back.vercel.app/'
  // public url= 'http://localhost:3000/'

  defect: Idefects = {

    title: '',
    image: '',
    description: ''

  }

  id: number = 0;


  constructor(private http: HttpClient) { }


  constructor(private http: HttpClient) { }


  //*-------------ESCANDALLOS--------------------------------------------

  getAllEscandallos():Observable<any> {
    return this.http.get(this.url + 'escandallos', this.headers)
  }

  getEscandalloById(escandalloId: any):Observable<any> {
    return this.http.get(this.url + 'escandallos/' + escandalloId)
  }

  createEscandallo(newEscandallo:IEscandallo):Observable<any> {
    return this.http.post(this.url + 'escandallos/create', newEscandallo)
  }
  editEscandallo(escandalloId: string, editItem:IEscandallo):Observable<any> {
    return this.http.put(this.url + 'escandallos/' + escandalloId, editItem)
  }
  deleteEscandallo(escandalloId: string):Observable<any> {
    return this.http.delete(this.url + 'escandallos/' + escandalloId)
  }


  //*--------------- DEFECTS ---------------------------------------------

  getAllDefects(): Observable<Idefects[]> {
    return this.http.get<Idefects[]>(this.url + 'defects')
  }
  
  getDefectsById(id: number) {
    return this.http.get(this.url + id);
  }


    //*--------------- PRODUCTS ---------------------------------------------

  getAllProducts():Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(this.url + 'products')
  }

  getProductByCode(code:string): Observable<Iproducts> {
    return this.http.get<Iproducts>( this.url + 'products/' + code)
  }


    //*--------------- VARIETIES ---------------------------------------------


  getAllVariety() {
    return this.http.get(this.url + 'varieties')
  }

    //*--------------- PROVIDERS ---------------------------------------------

  getAllProviders() {
    return this.http.get(this.url + 'providers')
  }

  getAllUsers(){
    return this.http.get(this.url + 'users')
  }




}

