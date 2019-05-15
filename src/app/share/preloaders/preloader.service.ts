import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {
  private dataSubj = new Subject<any>();
  dataSubj$ = this.dataSubj.asObservable();

  constructor() {
  }

  loading(value) {
    console.log('hello');
    this.dataSubj.next(value);
  }

}
