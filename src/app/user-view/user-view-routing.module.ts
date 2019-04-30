import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserViewProjectsComponent} from './user-view-projects/user-view-projects.component';
import {MyFollowingsComponent} from '../user/components/my-folliwings/my-followings-component';

const routes: Routes = [
  {
    path: '',
    component: UserViewProjectsComponent,
  },
  {
    path: 'followings',
    component: MyFollowingsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserViewRoutingModule { }

