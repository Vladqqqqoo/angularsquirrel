import {Component, OnInit} from '@angular/core';
import {AuthService} from './share/auth/auth.service';
import {PreloaderService} from "./share/preloaders/preloader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
    './grid.scss']
})
export class AppComponent implements OnInit {
  preload = true;

  constructor(private authService: AuthService,
              private preloaderService: PreloaderService) {
  }

  title = 'angularsquirrel';

  ngOnInit() {
    this.preloaderService.dataSubj$.subscribe(flag => {
      this.preload = flag;
      console.log(typeof flag);
      console.log('data changed  ' + flag);
    });
  }
}
