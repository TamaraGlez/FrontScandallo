import { ApiService } from 'src/app/shared/services/api.service';
import { Iusers, Login } from './../../shared/interfaces/iusers';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private api: ApiService ) {}

  loginUser (password:string, username:string): void {

    const user: Iusers = {userName:username, password:password,};
    console.log(user)
    this.api.loginUser(user).subscribe((res:Login) => {
    localStorage.setItem('token', res.token);
      console.log(res)
    });
  }


}








