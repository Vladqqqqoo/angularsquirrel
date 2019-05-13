import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private httpClient: HttpClient) { }

  sendLike(id): Observable<any> {
    return this.httpClient.put(`http://localhost:3000/shot/like`, {shotId : id});
  }
}
