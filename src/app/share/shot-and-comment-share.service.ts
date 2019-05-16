import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShotAndCommentShareService {

  changeShot: any;
  $changeShot: any;

  constructor() {
    this.changeShot = new Subject();
    this.$changeShot = this.changeShot.asObservable();
  }

  emitChange(e) {
    this.changeShot.next(e);
  }

  subscribeOnChange(): Observable<any> {
    return this.$changeShot;
  }

}
