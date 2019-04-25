import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {MyProjectsComponent} from './components/my-projects/my-projects.component';
import {PasswordComponent} from './components/password/password.component';
import {SocialNetworksComponent} from './components/social-networks/social-networks.component';

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
        path: 'projects',
        component: MyProjectsComponent,
      },
      {
        path: 'password',
        component: PasswordComponent,
      },
      {
        path: 'social',
        component: SocialNetworksComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

