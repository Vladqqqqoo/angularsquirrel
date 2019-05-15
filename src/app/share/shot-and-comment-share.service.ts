import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShotAndCommentShareService {

  obs: any;
  $obs: any;

  constructor() {
    this.obs = new Subject();
    this.$obs = this.obs.asObservable();
  }

  emitChange(e) {
    this.obs.next(e);
  }

  subscribeOnChange(): Observable<any> {
    return this.$obs;
  }

}
