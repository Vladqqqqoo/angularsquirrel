import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[а-яА-ЯёЁa-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[а-яА-ЯёЁa-zA-Z]+$/)]],
      age: [null, [Validators.required, Validators.pattern(/(^[1-9][0-9]?$)|(^100$)/)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    })
  }

  getFirstNameErrorMessage() {
    return this.userForm.get('firstName').hasError('required') ? 'You must enter a value' :
      this.userForm.get('firstName').hasError('pattern') ? 'Not a valid first name' :
        '';
  }

  ngOnInit() {
  }

}
