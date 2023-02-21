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

  loginUser (): void {

    const user: Iusers = {name:'', password:'',};

    this.api.loginUser(user).subscribe((res:Login) => {
      // localStorage.setItem('token', res.token);

    });
  }
}
