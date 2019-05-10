import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewShotComponent } from './new-shot/new-shot.component';
import {MaterialModule} from '../material/material.module';
import {ShotRoutingModule} from './shot-routing.module';
import {ShareModule} from '../share/share.module';
import { ShotEditComponent } from './shot-edit/shot-edit.component';

@NgModule({
  declarations: [NewShotComponent, ShotEditComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ShotRoutingModule,
    ShareModule
  ]
})
export class ShotsModule { }
