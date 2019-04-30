import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginAndRegisterFormContainer} from '../login-and-register-form-container/login-and-register-form-container';

@Component({
  selector: 'app-welcome-header',
  templateUrl: './welcome.header.component.html',
  styleUrls: ['./welcome.header.component.scss', './cat.scss', '../../grid.scss']
})
export class WelcomeHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  signUpComponentInit(): void {
    this.dialog.open(LoginAndRegisterFormContainer, {data: {initLogin: false, initRegister: true}});
  }

  ngOnInit() {
  }
}

