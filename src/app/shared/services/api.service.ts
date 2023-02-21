import { Iusers, Login } from './../interfaces/iusers';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idefects } from '../interfaces/idefects';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

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
  constructor(private http: HttpClient, private cookies: CookieService) { }

  getAllDefects() {
    return this.http.get(this.url + 'defects')

  }

  getDefectsById(id: number) {
    return this.http.get(this.url + id);

  }

  loginUser(users: Iusers): Observable<Login>{
    return this.http.post<Login>(this.url + 'users', users)
  }
  setToken(token:string){
    this.cookies.set("token", token)
  }

  getToken() {
    return this.cookies.get("token");
  }
}

