import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

const rooms = [
  {
    id: '123',
    name: 'Vladislav drobovich',
    lastMessage: 'Hello.'
  },
  {
    id: '456',
    name: 'Segei Belinski',
    lastMessage: 'What is up?'
  },
  {
    id: '789',
    name: 'Anton Ladudenko',
    lastMessage: 'How do yo do!'
  },
];

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  rooms = [];
  constructor(
    private router: Router,
  ) {
    this.rooms = rooms;
  }

  ngOnInit() {

  }

  joinRoom(idRoom) {
    this.router.navigate([`./im/${idRoom}`]);
  }

}
