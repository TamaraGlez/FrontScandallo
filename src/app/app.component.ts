import { Component, OnInit } from '@angular/core';
import { Iusers } from './shared/interfaces/iusers';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'escandallo';
  public user?: Iusers
  constructor( public auth: AuthService ){}

  ngOnInit(): void {
    
    // this.auth.checkSession().subscribe((data: Iusers) => {
    //   this.user = data
    //   console.log(data);
      
    // })
    
  }
}
