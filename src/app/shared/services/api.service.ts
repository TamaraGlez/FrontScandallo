import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url= 'http://escandallos-back.vercel.app/'
  constructor(private http: HttpClient) { }

  getAllDefects() {
    return this.http.get(this.url + 'defects')

  }

  // postDefects(defects: any) {
  //   return this.http.post('http://localhost:3100/defects', defects);
  // }
}

