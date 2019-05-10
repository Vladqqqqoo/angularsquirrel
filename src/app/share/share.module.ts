import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './auth/auth.service';
import {AuthInterceptor} from './auth/auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {FileDropDirective, FileSelectDirective} from 'ng2-file-upload';
import {OneShotContainerComponent} from './one-shot-container/one-shot-container.component';
import {MaterialModule} from '../material/material.module';
import {ShareRoutingModule} from './share-routing.module';
import { OneShotComponent } from './one-shot/one-shot.component';

@NgModule({
  declarations: [ FileSelectDirective, FileDropDirective, OneShotContainerComponent, OneShotComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ShareRoutingModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  exports: [ FileSelectDirective, FileDropDirective, OneShotContainerComponent]
})
export class ShareModule { }
