import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileMainComponent} from './user-profile-main/user-profile-main.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileMainComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }

