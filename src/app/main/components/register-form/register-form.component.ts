import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ConfirmPasswordValidator} from './confirm-password-validator';
import {AuthService} from '../../../share/auth/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  registerError: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.registerForm = this.fb.group({
      login: ['', [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
      confirmPassword: [''],
    }, {validator: ConfirmPasswordValidator.confirmPassword} );
  }

  getLoginErrorMessage() {
    return this.registerForm.get('login').hasError('required') ? 'You must enter some login' :
      this.registerForm.get('login').hasError('pattern') ? 'You mush enter valid login' :  '';
  }

  getEmailErrorMessage() {
    return this.registerForm.get('email').hasError('required') ? 'You must enter some email' :
      this.registerForm.get('email').hasError('pattern') ? 'invalid email' : '';
  }

  getPasswordErrorMessage() {
    return this.registerForm.get('password').hasError('required') ? 'You must enter some password' :
      this.registerForm.get('password').hasError('pattern') ? 'invalid password' : '';
  }

  getConfPasswordErrorMessage() {
    return this.registerForm.get('confirmPassword').hasError('required') ? 'You must confirm your password' :
      this.registerForm.get('confirmPassword').hasError('ConfirmPassword') ? 'Passwords don\'t match' : '';
  }

  registerOneUser() {
    const user = this.registerForm.value;
    delete user.confirmPassword;
    this.authService.signUp(user).subscribe(data => {
      alert('Successful registration');
      console.log(data);
    },
      error => {
      this.registerError = true;
      console.log(error);
      });
  }

  ngOnInit() {
    this.registerError = false
  }

}
