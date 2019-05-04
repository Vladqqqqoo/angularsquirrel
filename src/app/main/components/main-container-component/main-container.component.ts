import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../share/auth/auth.service';
import {MainContainerService} from './main-container.service';

@Component({
  selector: 'app-main-container-component',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss',
    '../../../grid.scss']
})
export class MainContainerComponent implements OnInit {

  posts: any;

  constructor(
    private authService: AuthService,
    private mainContainerService: MainContainerService
  ) { }

  ngOnInit() {
    this.mainContainerService.getAllPost().subscribe(
      shots => {
        this.posts = shots;
        console.log(shots)
        for (const post of this.posts) {
          post.url = `http://localhost:3000/${post.shotUrl}`;
        }
      }
    );
  }

}
