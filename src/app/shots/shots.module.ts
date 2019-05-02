import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewShotComponent } from './new-shot/new-shot.component';
import {MaterialModule} from '../material/material.module';
import {ShotRoutingModule} from './shot-routing.module';
import {FileUploadModule} from 'ng2-file-upload';
import {ShareModule} from '../share/share.module';
import { NewShotInfoComponent } from './new-shot-info/new-shot-info.component';

@NgModule({
  declarations: [NewShotComponent, NewShotInfoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ShotRoutingModule,
    ShareModule
  ]
})
export class ShotsModule { }
