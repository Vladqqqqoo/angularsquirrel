import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {MaterialModule} from '../material/material.module';
import {MainContainerComponent} from './components/main-container-component/main-container.component';
import {OneShotContainerComponent} from '../share/one-shot-container/one-shot-container.component';
import {ShareModule} from '../share/share.module';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [MainContainerComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    MatDialogModule,
    ShareModule
  ],
  providers: [
  ],
  entryComponents: [
    OneShotContainerComponent
  ]
})
export class MainModule {
}

