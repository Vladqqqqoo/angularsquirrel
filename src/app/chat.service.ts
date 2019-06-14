import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io('http://localhost:3000/');

  constructor() {
  }

  joinRoom(data) {
    this.socket.emit('join room', data);
  }

  leaveRoom(data) {
    this.socket.emit('leave room', data);
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  newUserJoined() {
    let observable = new Observable((observer) => {
      this.socket.on('new user joined', (data) => {
        observer.next(data);
      });
      // return () => {
      //   this.socket.disconnect()
      // }
    });
    return observable;
  }

  userLeftRoom() {
    let observable = new Observable((observer) => {
      this.socket.on('left room', (data) => {
        observer.next(data);
      });
      return () => {
        // this.socket.disconnect()
      }
    });
    return observable;
  }

  newMessageReceived() {
    let observable = new Observable((observer) => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });
      // return () => {
      //   this.socket.disconnect()
      // }
    });
    return observable;
  }

}
