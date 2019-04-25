import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {MaterialModule} from '../material/material.module';
import {MainContainerComponent} from "./components/main-container-component/main-container.component";

@NgModule({
  declarations: [MainContainerComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
  ],
  providers: [
  ],
})
export class MainModule {
}

