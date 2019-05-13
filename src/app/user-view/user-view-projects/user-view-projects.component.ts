import {Component, OnInit} from '@angular/core';
import {UserViewProjectsService} from './user-view-projects.service';
import {Router} from '@angular/router';


@Component({
  selector: 'user-view-projects',
  templateUrl: './user-view-projects.component.html',
  styleUrls: ['./user-view-projects.component.scss']
})
export class UserViewProjectsComponent implements OnInit {
  posts: any;
  user: any;

  constructor(
    private userViewProjectsService: UserViewProjectsService,
    private router: Router,
  ) {
  }


  editOne(id) {
    this.router.navigate([`shots/edit/${id}`]);
  }

  deleteOne(id) {
    this.userViewProjectsService.deleteOneShot(id).subscribe(
      data => {
        this.userViewProjectsService.getProjectList().subscribe(shots => {
          this.posts = shots;
          for (const post of this.posts) {
            post.url = `http://localhost:3000/${post.shotUrl}`;
          }
          // for (let i=0; i < this.)
        });
      }
    );

  }
  ngOnInit() {
    this.userViewProjectsService.getUserInfo().subscribe(userInfo => {
      this.user = userInfo;
      this.user.avatar = `http://localhost:3000/${userInfo['avatar']}`;
    });

    this.userViewProjectsService.getProjectList().subscribe(shots => {
      this.posts = shots;
      for (const post of this.posts) {
        post.url = `http://localhost:3000/${post.shotUrl}`;
      }
      // for (let i=0; i < this.)
    });
  }

}

