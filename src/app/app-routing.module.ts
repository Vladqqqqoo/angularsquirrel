import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: '', loadChildren: './main/main.module#MainModule'},
  {path: 'account', canLoad: [AuthGuard], canActivate: [AuthGuard], loadChildren: './user/user.module#UserModule'},
  {path: 'profile', canLoad: [AuthGuard], canActivate: [AuthGuard], loadChildren: './user-view/user-view.module#UserViewModule'},
  {path: 'shots', canLoad: [AuthGuard], canActivate: [AuthGuard], loadChildren: './shots/shots.module#ShotsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


