import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatDialog, MatMenuTrigger} from '@angular/material';
import {LoginAndRegisterFormContainer} from '../login-and-register-form-container/login-and-register-form-container';
import {AuthService} from '../../share/auth/auth.service';
import {AddNewPostService} from '../../share/add-post/add-new-post.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss',
    '../../grid.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private addNewPostService: AddNewPostService,
    private router: Router
  ) {
  }

  logOut() {
    this.authService.logOut().subscribe(data => {
      this.authService.removeTokens();
      this.router.navigate(['']);
    });
  }

  signInComponentInit(): void {
    this.dialog.open(LoginAndRegisterFormContainer, {data: {initRegister: true, initLogin: false}});
  }

  addNewPost() {
    this.addNewPostService.addOnePost();
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {

    }
  }

}
