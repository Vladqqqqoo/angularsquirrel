import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewShotComponent} from './new-shot/new-shot.component';
import {ShotEditComponent} from './shot-edit/shot-edit.component';
import {OneShotContainerComponent} from '../share/one-shot-container/one-shot-container.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewShotComponent,
  },
  {
    path: 'edit/:id',
    component: ShotEditComponent,
  },
  {
    path: ':id',
    component: OneShotContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShotRoutingModule { }
