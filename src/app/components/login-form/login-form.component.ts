import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../share/auth/auth.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService,
  ) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/)]],
      password: ['', [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
    });
  }

  getLoginErrorMessage() {
    return this.loginForm.get('login').hasError('required') ? 'You must enter your login' :
      this.loginForm.get('login').hasError('pattern') ? 'Your login is invalid' : '';
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
      this.toastr.success('You are successfully logged in', 'Authorization successful', {
        progressBar: false,
        positionClass: 'toast-top-right',
        timeOut: 2000,
        extendedTimeOut: 1000,
      });
      console.log(data);
      this.dialog.closeAll();
    }, (err) => {
      this.toastr.error('Check login and password and try again', 'Authorization failed', {
        progressBar: false,
        positionClass: 'toast-center-center-login',
        timeOut: 2000,
        extendedTimeOut: 1000,
      });
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
