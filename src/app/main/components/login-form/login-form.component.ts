import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;


  constructor(
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/)]],
      password: ['', [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
  });
  }

  getLoginErrorMessage() {
    return this.loginForm.get('login').hasError('required') ? 'You must enter your login' :
      this.loginForm.get('login').hasError('pattern') ? 'Your login is invalid' :  '';
  }

  getPasswordErrorMessage() {
    return this.loginForm.get('password').hasError('required') ? 'You must enter some password' :
      this.loginForm.get('password').hasError('pattern') ? 'invalid password' : ''
      ;
  }

  loginOneUser(){
    const request = this.loginForm.value;

    console.log(request)
  }


  ngOnInit() {
  }

}
