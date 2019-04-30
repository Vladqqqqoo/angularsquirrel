import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserViewProjectsComponent} from "./user-view-projects/user-view-projects.component";

const routes: Routes = [
  {
    path: '',
    component: UserViewProjectsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserViewRoutingModule { }

