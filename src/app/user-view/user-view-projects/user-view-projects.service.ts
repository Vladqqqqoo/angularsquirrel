import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserViewProjectsService {

  constructor(private httpClient: HttpClient) { }

  getProjectList() {
    return this.httpClient.get('http://localhost:3000/shot/user/list');
  }

  getUserInfo() {
    return this.httpClient.get('http://localhost:3000/account/info');
  }

  deleteOneShot(id) {
    return this.httpClient.delete(`http://localhost:3000/shot/${id}`);
  }

}
