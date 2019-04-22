import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MainRoutingModule} from './main-routing.module';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome.header.component';
import { MainContainerComponentComponent } from './components/main-container-component/main-container-component.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [NavigationComponent, WelcomeHeaderComponent, MainContainerComponentComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
