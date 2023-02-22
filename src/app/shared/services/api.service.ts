import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { IEscandallo } from 'src/app/interfaces/i-escandallos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // public url= 'http://escandallos-back.vercel.app/'
  public url= 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getAllDefects() {
    return this.http.get(this.url + 'defects')

  }
  getAllEscandallos():Observable<any> {
    return this.http.get(this.url + 'escandallos')
  }

  getAllProducts():Observable<any> {
    return this.http.get(this.url + 'products')
  }
  // postDefects(defects: any) {
  //   return this.http.post('http://localhost:3100/defects', defects);
  // }



  //*-------------ESCANDALLOS--------------------------------------------
  
  getEscandalloById(escandalloId: string):Observable<any> {
    return this.http.get(this.url + 'escandallos/' + escandalloId)
  }
  getEscandallosBy(){}
  createEscandallo(newEscandallo:IEscandallo):Observable<any> {
    return this.http.post(this.url + 'escandallos/create', newEscandallo)
  }
  editEscandallo(escandalloId: string, editItem:IEscandallo):Observable<any> {
    return this.http.put(this.url + 'escandallos/' + escandalloId, editItem)
  }
  deleteEscandallo(escandalloId: string):Observable<any> {
    return this.http.delete(this.url + 'escandallos/' + escandalloId)
  }


}

