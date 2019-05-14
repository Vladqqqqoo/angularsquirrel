import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserViewRoutingModule} from './user-view-routing.module';
import {MaterialModule} from '../material/material.module';
import {UserViewProjectsComponent} from './user-view-projects/user-view-projects.component';
import {MyFollowingsComponent} from '../user/components/my-folliwings/my-followings-component';
import {ShareModule} from '../share/share.module';
import {OneShotComponent} from '../share/one-shot/one-shot.component';


@NgModule({
  declarations: [MyFollowingsComponent, UserViewProjectsComponent],
  imports: [
    CommonModule,
    UserViewRoutingModule,
    MaterialModule,
    ShareModule
  ],
  entryComponents: [
    OneShotComponent
  ]
})
export class UserViewModule { }
