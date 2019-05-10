import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OneShotContainerComponent} from './one-shot-container/one-shot-container.component';
import {OneShotComponent} from './one-shot/one-shot.component';

const routes: Routes = [
  {
    path: '',
    component: OneShotContainerComponent
  },
  {
    path: 'shot/:id',
    component: OneShotComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
