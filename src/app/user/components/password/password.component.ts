import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChangePasswordValidator} from './change.password.validator';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  private passwordForm: FormGroup;
  private httpSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient
    ) {
    this.passwordForm = fb.group({
      oldPassword: ['', [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
      newPassword: ['',  [Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
    }, {validator: ChangePasswordValidator.confirmPassword});
  }

  getOldPasswordErrorMessage() {
    return this.passwordForm.get('oldPassword').hasError('required') ? 'You must enter a value' :
      this.passwordForm.get('oldPassword').hasError('pattern') ? 'Not a valid password' :
        '';
  }

  getNewPasswordErrorMessage() {
    return this.passwordForm.get('newPassword').hasError('required') ? 'You must input new password' :
      this.passwordForm.get('newPassword').hasError('pattern') ? 'You must input a valid password' :
      this.passwordForm.get('newPassword').hasError('ConfirmPassword') ? 'Passwords match' : '';
  }

  changePassword() {
    this.httpClient.post<any>('http://localhost:3000/account/password', this.passwordForm.value).subscribe(
      data => {console.log(data); },
        error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 400) {
            alert('Your password is incorrect');
          } else if (error.status === 200) {
            alert('All good');
          }
        }
      }
    );
  }

  ngOnInit() {
  }

}
