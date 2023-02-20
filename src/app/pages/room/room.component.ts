import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {

  room : any

  constructor(private router: ActivatedRoute, private cookieService: CookieService) {}

  ngOnInit(): void {

    this.room = this.router.snapshot.paramMap.get('room')

    this.cookieService.set('room', this.room)

    console.log(this.room);
  }

}
