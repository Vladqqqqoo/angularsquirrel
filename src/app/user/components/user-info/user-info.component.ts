import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

import {FileItem, FileUploader, ParsedResponseHeaders} from 'ng2-file-upload';
import {AuthService} from "../../../share/auth/auth.service";

const URL = 'http://localhost:3000/account/avatar';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {

  avatarImage = 'https://image.flaticon.com/icons/png/512/26/26098.png';
  fileLabel: String;
  userForm: FormGroup;

  public uploader: FileUploader = new FileUploader({
    url: URL,
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private authService: AuthService) {
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);

    this.userForm = fb.group({
      login: ['', [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      firstName: ['', [Validators.pattern(/^[а-яА-ЯёЁa-zA-Z]+$/)]],
      lastName: ['', [Validators.pattern(/^[а-яА-ЯёЁa-zA-Z]+$/)]],
      age: [null, [Validators.pattern(/(^[1-9][0-9]?$)|(^100$)/)]],
      location: ['', [Validators.pattern(/^[#.0-9a-zA-Z\s,-]+$/)]],
      website: ['', [Validators.pattern(/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/)]],
      skills: ['', [Validators.pattern(/[а-яА-ЯёЁa-zA-Z,]+/)]],
      bio: ['',],
    });
  }

  getErrorMessage(field: string) {
    return this.userForm.get(field).hasError('required') ? 'You must enter a value' :
      this.userForm.get(field).hasError('pattern') ? 'Not valid' :
        '';
  }

  changeLabel() {
    console.log(this.uploader.queue);
    this.fileLabel = this.uploader.queue[0].file.name;
  }

  Save() {
    const userBio = this.userForm.value;
    this.httpClient.post<any>('http://localhost:3000/account/info', userBio).subscribe(
      data => console.log('data===' + data));
  }

  deleteFile() {
    this.uploader.clearQueue();
    this.fileLabel = 'Choose a file';
  }

  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    this.avatarImage = `http://localhost:3000/${response}`;
  }

  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    this.authService.refreshToken().subscribe((tokens) => {
      this.authService.setTokens(tokens);
      this.uploader.setOptions({authToken: `Bearer ${tokens['jwt']}`});
      this.uploader.queue[0].upload();
    });
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/account/info').subscribe(
      data => {
        const array = Object.keys(this.userForm.getRawValue());
        for (const key of array) {
          this.userForm.get(key).setValue(data[key]);
        }
        if (data.hasOwnProperty('avatar')) {
          this.avatarImage = `http://localhost:3000/${data['avatar']}`;
        }
      }
    );
  }
}
