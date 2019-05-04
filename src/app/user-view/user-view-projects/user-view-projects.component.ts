import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'user-view-projects',
  templateUrl: './user-view-projects.component.html',
  styleUrls: ['./user-view-projects.component.scss']
})
export class UserViewProjectsComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    ) {

    this.user = {
      firstName: 'Alex',
      lastName: 'Alexeev',
      location: 'Minsk, Belarus'
    };
  }

  user: object;
  posts: any;


  ngOnInit() {
    this.httpClient.get(`http://localhost:3000/shot/user/list`).subscribe(data => {
      this.posts = data;
      for (const post of this.posts) {
        post.url = `http://localhost:3000/${post.shotUrl}`;
      }
    } );
  }

}

