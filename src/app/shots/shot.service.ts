import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShotService {

  constructor(private httpClient: HttpClient) { }

  getShot() {
    return this.httpClient.get('http://localhost:3000/shot/');
  }

  putShot(shotInfo) {
    return this.httpClient.put('')
  }
}
