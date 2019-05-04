import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewShotComponent } from './new-shot/new-shot.component';
import {MaterialModule} from '../material/material.module';
import {ShotRoutingModule} from './shot-routing.module';
import {FileUploadModule} from 'ng2-file-upload';
import {ShareModule} from '../share/share.module';
import { ShotEditComponent } from './shot-edit/shot-edit.component';
import { OneShotComponent } from './one-shot/one-shot.component';

@NgModule({
  declarations: [NewShotComponent, ShotEditComponent, OneShotComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ShotRoutingModule,
    ShareModule
  ]
})
export class ShotsModule { }
