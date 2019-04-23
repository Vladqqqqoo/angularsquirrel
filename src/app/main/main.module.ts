import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MainRoutingModule} from './main-routing.module';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome.header.component';
import { MainContainerComponent } from './components/main-container-component/main-container.component';
import {
  MAT_LABEL_GLOBAL_OPTIONS,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule, MatIconModule, MatInputModule,
} from '@angular/material';
import { LoginAndRegisterFormContainer } from './components/login-and-register-form-container/login-and-register-form-container';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [NavigationComponent, WelcomeHeaderComponent, MainContainerComponent, LoginAndRegisterFormContainer, RegisterFormComponent, LoginFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MainRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    LoginAndRegisterFormContainer
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ]
})
export class MainModule { }

