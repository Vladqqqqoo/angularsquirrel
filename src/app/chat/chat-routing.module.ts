import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {BoardComponent} from "./components/board/board.component";
import {RoomComponent} from "./components/room/room.component";

const routes: Routes = [
  {path: '', component: BoardComponent},
  {path: ':idRoom', component: RoomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {

}
