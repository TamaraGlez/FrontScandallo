import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { Iusers, Login } from './../interfaces/iusers';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


    // public url= 'http://escandallos-back.vercel.app/'
    public url= 'http://localhost:3000/'

  constructor(private http: HttpClient, private cookies: CookieService) { }

  
  loginUser(users: Iusers): Observable<Login>{
    return this.http.post<Login>(this.url + 'users', users,{
      headers: new HttpHeaders ({
        Authorization: 'Bearer ' + localStorage.getItem ('token'),

      }),
    });

  }
  setToken(token:string){
    this.cookies.set("token", token)
  }

  getToken() {
    return this.cookies.get("token");
  }



}
