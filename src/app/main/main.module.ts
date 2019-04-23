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
import { LoginAndRegisterFormContainer } from './components/login-and-register-form-container/login-and-register-form-container';
} from '@angular/material';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MaterialModule} from "../material/material.module";

@NgModule({
  declarations: [NavigationComponent, WelcomeHeaderComponent, MainContainerComponent, LoginAndRegisterFormContainer, RegisterFormComponent, LoginFormComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MainRoutingModule,
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  providers: [
  ],
    LoginAndRegisterFormContainer
  entryComponents: [
  ],
    MatInputModule
    MatFormFieldModule,
    MaterialModule,
  ]
})
export class MainModule { }

