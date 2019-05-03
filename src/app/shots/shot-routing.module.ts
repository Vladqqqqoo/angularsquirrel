import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewShotComponent} from './new-shot/new-shot.component';
import {ShotEditComponent} from './shot-edit/shot-edit.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewShotComponent,
  },
  {
    path: ':id',
    component: ShotEditComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShotRoutingModule { }
