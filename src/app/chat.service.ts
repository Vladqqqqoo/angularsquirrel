import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket;

  constructor() {
    this.socket= io('http://localhost:3000/');
  }

  sendMessage(text){
    console.log(text);
    this.socket.emit('send message', text);
  }


}
