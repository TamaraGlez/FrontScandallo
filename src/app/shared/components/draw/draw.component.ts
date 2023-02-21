import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service.service';



@Component({
  selector: 'draw-root',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})

export class DrawComponent implements OnInit {
  newMessage: any;
  messageList: string[] = [];

  numberOfOnlineUsers: any;

  constructor(private chatService: ChatService){

  }

  ngOnInit(){
    this.chatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    })
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}