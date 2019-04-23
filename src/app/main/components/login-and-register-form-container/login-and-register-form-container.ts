import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './login-and-register-form-container.html',
  styleUrls: ['./login-and-register-form-container.scss',
    '../../../grid.scss']
})
export class LoginAndRegisterFormContainer implements OnInit {

  initLogin: boolean;
  initRegister: boolean;

  constructor() { }

  initLoginForm(): void {
    this.initLogin = true;
    this.initRegister = false;
  }

  initRegisterForm(): void {
    this.initLogin = false;
    this.initRegister = true;
  }

  ngOnInit() {
    this.initLogin = false;
    this.initRegister = false;
  }

}
