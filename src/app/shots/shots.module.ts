import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewShotComponent } from './new-shot/new-shot.component';
import {MaterialModule} from '../material/material.module';
import {ShotRoutingModule} from './shot-routing.module';

@NgModule({
  declarations: [NewShotComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ShotRoutingModule
  ]
})
export class ShotsModule { }
