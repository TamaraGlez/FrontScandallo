import { ApiService } from 'src/app/shared/services/api.service';
import { IUserDB, Iusers, Login } from './../../shared/interfaces/iusers';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth:AuthService,  private router: Router ) {}

  loginUser (password:string, username:string): void {

    const user: Iusers = {userName:username, password:password,};
    console.log(user)

    this.auth.loginUser(user).subscribe((res:IUserDB) => {
      let token = res.token
      let user = JSON.stringify(res.userDB)
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', user);
      console.log(res.userDB)

      this.router.navigate(['/index']);
    });
  }



}



  // this.afAuth.authState.subscribe(user => {
  //     if (user) {
  //       this.userState = user;
  //       localStorage.setItem('user', JSON.stringify(this.userState));
  //       JSON.parse(localStorage.getItem('user'));
  //     } else {
  //       localStorage.setItem('user', null);
  //       JSON.parse(localStorage.getItem('user'));
  //     }
  //   })
  // }




