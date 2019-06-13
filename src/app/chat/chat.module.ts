import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import {ChatRoutingModule} from "./chat-routing.module";
import { RoomComponent } from './components/room/room.component';
import {MaterialModule} from "../material/material.module";

@NgModule({
  declarations: [BoardComponent, RoomComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MaterialModule
  ]
})
export class ChatModule { }
