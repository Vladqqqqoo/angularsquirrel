import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserViewRoutingModule} from './user-view-routing.module';
import {MaterialModule} from '../material/material.module';
import {UserViewProjectsComponent} from './user-view-projects/user-view-projects.component';
import {MyFollowingsComponent} from '../user/components/my-folliwings/my-followings-component';


@NgModule({
  declarations: [MyFollowingsComponent, UserViewProjectsComponent],
  imports: [
    CommonModule,
    UserViewRoutingModule,
    MaterialModule
  ]
})
export class UserViewModule { }
