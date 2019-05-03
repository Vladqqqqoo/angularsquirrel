import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './auth/auth.service';
import {AuthInterceptor} from './auth/auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {FileDropDirective, FileSelectDirective} from 'ng2-file-upload';

@NgModule({
  declarations: [ FileSelectDirective, FileDropDirective],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  exports: [ FileSelectDirective, FileDropDirective]
})
export class ShareModule { }
