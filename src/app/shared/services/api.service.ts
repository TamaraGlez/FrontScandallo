import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url= 'http://escandallos-back.vercel.app/'
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
}

