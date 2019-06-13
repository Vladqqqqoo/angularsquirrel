import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginAndRegisterFormContainer} from '../login-and-register-form-container/login-and-register-form-container';
import {AuthService} from '../../share/auth/auth.service';
import {Router} from "@angular/router";
import {ChatService} from "../../chat.service";

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
    private router: Router,
  ) {
  }

  logOut() {
    this.authService.logOut().subscribe(data => {
      this.authService.removeTokens();
      this.router.navigate(['']);
    });
  }

  signInComponentInit(): void {
    this.dialog.open(LoginAndRegisterFormContainer, {data: {initRegister: false, initLogin: true}});
  }

  ngOnInit() {
  }

}
