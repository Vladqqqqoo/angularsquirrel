import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileMainComponent } from './user-profile-main/user-profile-main.component';
import {UserProfileRoutingModule} from './user-profile-routing.module';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [UserProfileMainComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    MaterialModule
  ]
})
export class UserProfileModule { }
