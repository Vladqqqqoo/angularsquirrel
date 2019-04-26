import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import {UserRoutingModule} from './user-routing.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { PasswordComponent } from './components/password/password.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [UserComponent, UserInfoComponent, PasswordComponent, SocialNetworksComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
