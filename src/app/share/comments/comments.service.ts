import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private httpClient: HttpClient
  ) {}

  sendComment(message, id): Observable<any> {
    return this.httpClient.post(`http://localhost:3000/comment`, {
      commentMessage: message,
      shotId: id,
      commentatorId: localStorage.getItem('USER_ID')
    });
  }

  getComments(id): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/comment/all/${id}`);
  }
}
