import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {PasswordComponent} from './components/password/password.component';
import {MyFollowingsComponent} from './components/my-folliwings/my-followings-component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserInfoComponent,
      },
      {
        path: 'password',
        component: PasswordComponent,
      },
      {
        path: 'followings',
        component: MyFollowingsComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

