import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iusers } from '../../interfaces/iusers';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public user!: Iusers;

  constructor(public auth: AuthService, private router: Router){}
 

  ngOnInit(): void {

    console.log("NAVBAR ONINIT");
    

      this.auth.getUser().subscribe( (res: Iusers) => {
        console.log(res);
        
        
      })
    
  }

  logOut(){
    this.auth.logOut();
    this.router.navigate(['/login']);
  }

  // isLogin(){
  //   this.auth.getToken();
    
  // }
}
