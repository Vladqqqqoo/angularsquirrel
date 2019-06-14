import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, Validators} from '@angular/forms';
import {ChatService} from "../../../chat.service";
import {Subscription} from "rxjs";

const messages = [
  {
    idMessage: '111',
    text: 'Privet Vlad',
    from: 'Sergei',
  },
  {
    idMessage: '222',
    text: 'Privet Sergei',
    from: 'Me',
  },
  {
    idMessage: '333',
    text: 'Kak dela?',
    from: 'Sergei',
  },
  {
    idMessage: '444',
    text: 'Norm',
    from: 'Me',
  },
];

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnDestroy {

  idRoom;
  messageForm: FormControl;
  messages = [];

  msSub: Subscription;
  joinSub: Subscription;
  leftSub: Subscription;

  user: String;
  room: String;

  constructor(private route: ActivatedRoute,
              private chatService: ChatService) {
    this.room = this.route.snapshot.params.idRoom;
    this.user = localStorage.getItem('USER_ID');

    this.messageForm = new FormControl('', [Validators.required]);
    this.messages = messages;
  }

  ngOnInit() {
    console.log('init');
    this.chatService.joinRoom({user: this.user, room: this.room});

    this.joinSub = this.chatService.newUserJoined().subscribe((data: { user, message }) => {
      console.log('join room');
      console.log(data);
      this.messages.push({user: data.user, text: `${data.user} ${data.message}`});
    });

    this.leftSub = this.chatService.userLeftRoom().subscribe((data: { user, message }) => {
      console.log('left room');
      console.log(data);
      this.messages.push({user: data.user, text: `${data.user} ${data.message}`});
    });

    this.msSub = this.chatService.newMessageReceived().subscribe((data: { user, message }) => {
      console.log('new message');
      console.log(data);
      this.messages.push({user: data.user, text: `${data.user} ${data.message}`});
    });
  }

  sendMessage() {
    this.chatService.sendMessage({user: this.user, room: this.room, message: this.messageForm.value});
  }


  ngOnDestroy() {
    console.log('destroy');
    this.chatService.leaveRoom({user: this.user, room: this.room});
    this.msSub.unsubscribe();
    this.joinSub.unsubscribe();
    this.leftSub.unsubscribe();
  }


}
