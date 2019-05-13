import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './auth/auth.service';
import {AuthInterceptor} from './auth/auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {FileDropDirective, FileSelectDirective} from 'ng2-file-upload';
import {MaterialModule} from '../material/material.module';
import { OneShotComponent } from './one-shot/one-shot.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [ FileSelectDirective, FileDropDirective, OneShotComponent, LikeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  exports: [ FileSelectDirective, FileDropDirective, OneShotComponent]
})
export class ShareModule { }
