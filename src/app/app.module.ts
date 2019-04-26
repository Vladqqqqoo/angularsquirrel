import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {LoginAndRegisterFormContainer} from './components/login-and-register-form-container/login-and-register-form-container';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {WelcomeHeaderComponent} from './components/welcome-header/welcome.header.component';
import {MaterialModule} from './material/material.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAndRegisterFormContainer,
    NavigationComponent,
    LoginAndRegisterFormContainer,
    LoginFormComponent,
    RegisterFormComponent,
    WelcomeHeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [
    LoginAndRegisterFormContainer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
