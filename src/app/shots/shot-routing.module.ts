import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewShotComponent} from './new-shot/new-shot.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewShotComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShotRoutingModule { }
