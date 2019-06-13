import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, Validators} from '@angular/forms';
import {ChatService} from "../../../chat.service";

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
export class RoomComponent implements OnInit {

  idRoom;
  messageForm: FormControl;
  messages = [];

  user: String;
  room: String;

  constructor(private route: ActivatedRoute,
              private chatService: ChatService) {
    this.idRoom = this.route.snapshot.params.idRoom;
    this.messageForm = new FormControl('', [Validators.required]);
    this.messages = messages;
  }

  ngOnInit() {
  }

  sendMessage() {
    this.chatService.sendMessage(this.messageForm.value);
    console.log('send');
  }

}
