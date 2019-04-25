import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../share/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  loginError: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
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

  loginOneUser() {
    const userData = this.loginForm.value;
    this.authService.signIn(userData).subscribe((data) => {
      this.authService.setTokens(data);
      alert('Login Successfully');
      console.log(data);
    }, (err) => {
      this.loginError = true;
      console.log(err);
    });
  }


  ngOnInit() {
    this.loginError = false
  }

}
