import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContainerComponentComponent} from './components/main-container-component/main-container-component.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponentComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
