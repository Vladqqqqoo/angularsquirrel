import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './main/main.module#MainModule'},
  {path: 'account', canLoad: [], loadChildren: './user/user.module#UserModule'},
  {path: 'profile', canLoad: [], loadChildren: './user-view/user-view.module#UserViewModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

