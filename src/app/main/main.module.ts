import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MainRoutingModule} from "./main-routing.module";

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
