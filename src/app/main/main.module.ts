import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MainRoutingModule} from './main-routing.module';
import {WelcomeHeaderComponent} from './components/welcome-header/welcome.header.component';
import {MainContainerComponent} from './components/main-container-component/main-container.component';

import {LoginAndRegisterFormContainer} from './components/login-and-register-form-container/login-and-register-form-container';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {MaterialModule} from '../material/material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [NavigationComponent, WelcomeHeaderComponent, MainContainerComponent, LoginAndRegisterFormContainer, RegisterFormComponent, LoginFormComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  entryComponents: [
    LoginAndRegisterFormContainer
  ],
})
export class MainModule {
}

