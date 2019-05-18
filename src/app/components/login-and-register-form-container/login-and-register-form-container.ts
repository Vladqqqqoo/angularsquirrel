import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material'
import { Inject } from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './login-and-register-form-container.html',
  styleUrls: ['./login-and-register-form-container.scss',
    '../../grid.scss']
})
export class LoginAndRegisterFormContainer implements OnInit {
  private initLogin: boolean;
  private initRegister: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  initLoginForm(): void {
    this.initLogin = true;
    this.initRegister = false;
  }

  initRegisterForm(): void {
    this.initLogin = false;
    this.initRegister = true;
  }

  ngOnInit() {
    this.initLogin = this.data.initLogin;
    this.initRegister = this.data.initRegister;
  }

}
