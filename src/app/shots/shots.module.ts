import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewShotComponent } from './new-shot/new-shot.component';
import {MaterialModule} from '../material/material.module';
import {ShotRoutingModule} from './shot-routing.module';
import {FileUploadModule} from 'ng2-file-upload';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [NewShotComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ShotRoutingModule,
    ShareModule
  ]
})
export class ShotsModule { }
