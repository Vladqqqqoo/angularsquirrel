import { Component } from '@angular/core';
import {AuthService} from './share/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
  './grid.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {}
  title = 'angularsquirrel';
}
