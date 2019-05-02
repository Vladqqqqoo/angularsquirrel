import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewShotComponent} from './new-shot/new-shot.component';
import {NewShotInfoComponent} from './new-shot-info/new-shot-info.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewShotComponent,
  },
  {
    path: 'new/info',
    component: NewShotInfoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShotRoutingModule { }
