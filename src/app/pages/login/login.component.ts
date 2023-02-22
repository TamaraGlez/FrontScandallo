import { ApiService } from 'src/app/shared/services/api.service';
import { Iusers, Login } from './../../shared/interfaces/iusers';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth:AuthService ) {}

  loginUser (password:string, username:string): void {

    const user: Iusers = {userName:username, password:password,};
    console.log(user)
    this.auth.loginUser(user).subscribe((res:Login) => {
    localStorage.setItem('token', res.token);
      console.log(res)
    });
  }


}








