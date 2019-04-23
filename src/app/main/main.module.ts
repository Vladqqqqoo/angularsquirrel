import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MainRoutingModule} from './main-routing.module';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome.header.component';
import { MainContainerComponent } from './components/main-container-component/main-container.component';
import {MaterialModule} from "../material/material.module";

@NgModule({
  declarations: [NavigationComponent, WelcomeHeaderComponent, MainContainerComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
  ]
})
export class MainModule { }
