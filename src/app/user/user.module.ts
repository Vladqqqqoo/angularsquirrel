import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import {UserRoutingModule} from './user-routing.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { PasswordComponent } from './components/password/password.component';
import {MaterialModule} from '../material/material.module';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import {FormsModule} from '@angular/forms';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [UserComponent, UserInfoComponent, PasswordComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule,
    FormsModule,
    ShareModule
  ],
  providers: [],
})
export class UserModule { }
