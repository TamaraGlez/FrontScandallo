import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { IEscandallo } from 'src/app/interfaces/i-escandallos';
import { Idefects } from '../interfaces/idefects';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  public url= 'http://escandallos-back.vercel.app/'
  // public url= 'http://localhost:3000/'

  defect: Idefects = {

    title: '',
    image: '',
    description: ''

  }

  id: number = 0;

  constructor(private http: HttpClient) { }

  getAllDefects() {
    return this.http.get(this.url + 'defects')
  }

  // postDefects(defects: any) {
  //   return this.http.post('http://localhost:3100/defects', defects);
  // }



  //*-------------ESCANDALLOS--------------------------------------------
  
  getAllEscandallos():Observable<any> {
    return this.http.get(this.url + 'escandallos')
  }
  
  getEscandalloById(escandalloId: string):Observable<any> {
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


  getDefectsById(id: number) {
    return this.http.get(this.url + id);

  }

  getAllProducts():Observable<any> {
    return this.http.get(this.url + 'products')

  }

  getAllVariety() {
    return this.http.get(this.url + 'varieties')
  }

  getAllProviders() {
    return this.http.get(this.url + 'providers')
  }


}

