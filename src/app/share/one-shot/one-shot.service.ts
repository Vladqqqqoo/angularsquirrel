import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneShotService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getOneShot(shotId): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/shot/${shotId}`);
  }

  sendLike(id): Observable<any> {
    return this.httpClient.put(`http://localhost:3000/shot/like`, {shotId : id});
  }

}
