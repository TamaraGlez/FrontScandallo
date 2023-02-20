import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {

  room : any;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {

    this.room = this.router.snapshot.paramMap.get('room')

    console.log(this.room);
  }

}
