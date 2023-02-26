import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Iusers } from './../interfaces/iusers';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


    // public url= 'https://escandallos-back.vercel.app/'
    public url= 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  public headers = {headers: new HttpHeaders ({
    Authorization: 'Bearer ' + localStorage.getItem ('token'),
  })}

  loginUser(users: Iusers): Observable<any>{
    return this.http.post<any>(this.url + 'users', users );
  }

  logOut(){
    localStorage.clear();
  }

  register(user: Iusers){
    return this.http.post(`${this.url}/users/register`, user, this.headers);
  }

  // setToken(token:string){
  //   this.cookies.set("token", token)
  // }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser(){
    let user = JSON.parse(String(localStorage.getItem('user')));
    return user;
  }

  checkSession(): Observable<any>{
    return this.http.post( this.url + "users/checksession", this.headers).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return throwError(error.error.message)
  }


}
