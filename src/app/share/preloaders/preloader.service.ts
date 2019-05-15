import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {
  private dataSubj = new Subject<any>();
  dataSubj$ = this.dataSubj.asObservable();

  constructor() {
  }

  loading(value) {
    this.dataSubj.next(value);
  }

}
