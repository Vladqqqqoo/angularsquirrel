import { Component, OnInit } from '@angular/core';
import {AddNewPostService} from '../../share/add-post/add-new-post.service';

@Component({
  selector: 'user-view-projects',
  templateUrl: './user-view-projects.component.html',
  styleUrls: ['./user-view-projects.component.scss']
})
export class UserViewProjectsComponent implements OnInit {

  constructor(
  ) {
    this.posts = [
      {
        image: 'http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg',
      },
      {
        image: 'http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg',
      },
      {
        image: 'http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg',
      },
      {
        image: 'http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg',
      },
      {
        image: 'http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg',
      }
    ];
    this.user = {
      firstName: 'Alex',
      lastName: 'Alexeev',
      location: 'Minsk, Belarus'
    };
  }

  user: object;
  posts: any;


  ngOnInit() {
  }

}
