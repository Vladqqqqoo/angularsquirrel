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

  getOneShot(shotId, userId): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/shot/?shotId=${shotId}&userId=${userId}`);
  }
}
