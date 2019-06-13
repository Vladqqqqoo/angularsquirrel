import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShotAndCommentShareService {

  changeShot: any;
  $changeShot: any;

  changeLikes: any;
  $changeLikes: any;

  constructor() {
    this.changeShot = new Subject();
    this.$changeShot = this.changeShot.asObservable();

    this.changeLikes = new Subject();
    this.$changeLikes = this.changeLikes.asObservable();
  }

  emitChangeLikes(e) {
    this.changeLikes.next(e);
  }

  emitChange(e) {
    this.changeShot.next(e);
  }

  subscribeOnChange(): Observable<any> {
    return this.$changeShot;
  }

}
