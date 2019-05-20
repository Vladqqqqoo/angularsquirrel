import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShotService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getShot(id): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/shot/?shotId=${id}`);
  }

  putShot(id, shotInfo) {
    return this.httpClient.put(`http://localhost:3000/shot/${id}`, shotInfo);
  }
}
