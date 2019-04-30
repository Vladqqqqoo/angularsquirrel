import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserViewRoutingModule} from './user-view-routing.module';
import {MaterialModule} from '../material/material.module';
import {UserViewProjectsComponent} from "./user-view-projects/user-view-projects.component";


@NgModule({
  declarations: [UserViewProjectsComponent],
  imports: [
    CommonModule,
    UserViewRoutingModule,
    MaterialModule
  ]
})
export class UserViewModule { }
