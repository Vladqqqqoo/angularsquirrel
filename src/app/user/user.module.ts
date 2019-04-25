import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import {UserRoutingModule} from './user-routing.module';
import {MatSidenavModule, MatListModule, MatFormFieldModule, MatButtonModule} from '@angular/material';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { PasswordComponent } from './components/password/password.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [UserComponent, UserInfoComponent, MyProjectsComponent, PasswordComponent, SocialNetworksComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
