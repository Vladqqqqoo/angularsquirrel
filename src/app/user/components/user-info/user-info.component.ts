import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userForm: FormGroup;
  uploadForm: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.userForm = fb.group({
      login: ['', [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      firstName: ['', [Validators.pattern(/^[а-яА-ЯёЁa-zA-Z]+$/)]],
      lastName: ['', [Validators.pattern(/^[а-яА-ЯёЁa-zA-Z]+$/)]],
      age: [null, [Validators.pattern(/(^[1-9][0-9]?$)|(^100$)/)]],
      location: ['', [Validators.pattern(/^[#.0-9a-zA-Z\s,-]+$/)]],
      website: ['', [Validators.pattern(/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/)]],
      skills: ['', [Validators.pattern(/[а-яА-ЯёЁa-zA-Z,]+/)]],
      bio: ['', ],
    });
  }

  getErrorMessage(field: string) {
    return this.userForm.get(field).hasError('required') ? 'You must enter a value' :
      this.userForm.get(field).hasError('pattern') ? 'Not valid' :
        '';
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    this.httpClient.post<any>('http://localhost:3000/customers/login', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  onSave() {
      const userBio = this.userForm.value;
      this.httpClient.post<any>('http://localhost:3000/account/info', userBio).subscribe(
        data => alert('Info saved')
      );
  }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      profile: ['']
    });

    this.httpClient.get('http://localhost:3000/account/info').subscribe(
      data => {
        const array = Object.keys(this.userForm.getRawValue());
        for ( const key of array) {
          this.userForm.get(key).setValue(data[key]);
        }
      }
    );
  }

}
