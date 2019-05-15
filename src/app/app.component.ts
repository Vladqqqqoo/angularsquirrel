import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthService} from './share/auth/auth.service';
import {PreloaderService} from "./share/preloaders/preloader.service";
import {delay, startWith} from "rxjs/operators";
import {tap} from "rxjs/internal/operators/tap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
    './grid.scss']
})
export class AppComponent implements OnInit {
  preload = true;

  constructor(private authService: AuthService,
              private preloaderService: PreloaderService,
              private cdRef : ChangeDetectorRef) {
  }

  title = 'angularsquirrel';

  ngOnInit() {

    this.preloaderService.dataSubj$
      .pipe(
        startWith(null),
        tap(flag => {
            this.preload = flag;
            this.cdRef.detectChanges();
          }
        )).subscribe();
  }
}
