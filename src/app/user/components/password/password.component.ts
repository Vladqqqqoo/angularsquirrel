import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChangePasswordValidator} from './change.password.validator';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordForm = fb.group({
      oldPassword: ['', [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
      newPassword: ['',  [Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
    }, {validator: ChangePasswordValidator.confirmPassword});
  }

  getOldPasswordErrorMessage() {
    return this.passwordForm.get('oldPassword').hasError('required') ? 'You must enter a value' :
      this.passwordForm.get('oldPassword').hasError('pattern') ? 'Not a valid first name' :
        '';
  }

  getNewPasswordErrorMessage() {
    return this.passwordForm.get('newPassword').hasError('required') ? 'You must input new password' :
      this.passwordForm.get('newPassword').hasError('pattern') ? 'You must input a valid password' :
      this.passwordForm.get('newPassword').hasError('ConfirmPassword') ? 'Passwords match' : '';
  }

  ngOnInit() {
  }

}
