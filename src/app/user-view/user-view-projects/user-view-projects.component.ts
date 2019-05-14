import {Component, OnInit} from '@angular/core';
import {UserViewProjectsService} from './user-view-projects.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {OneShotComponent} from '../../share/one-shot/one-shot.component';
import {Location} from '@angular/common';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'user-view-projects',
  templateUrl: './user-view-projects.component.html',
  styleUrls: ['./user-view-projects.component.scss']
})
export class UserViewProjectsComponent implements OnInit {
  shots: any;
  user: any;

  constructor(
    private userViewProjectsService: UserViewProjectsService,
    private router: Router,
    private location: Location,
    private dialog: MatDialog,
    private toastr: ToastrService,
  ) {
  }


  editOne(id) {
    this.router.navigate([`shots/edit/${id}`]);
  }

  test() {
    console.log(`test`);
  }

  deleteOne(id) {
    this.userViewProjectsService.deleteOneShot(id).subscribe(
      data => {
        this.userViewProjectsService.getProjectList().subscribe(shots => {
          this.shots = shots;
          for (const shot of this.shots) {
            shot.url = `http://localhost:3000/${shot.shotUrl}`;
          }
        });
      }
    );
  }

  openShot(shotId) {
    this.location.go(`shots/${shotId}`);
    this.dialog.open(OneShotComponent, {data: {id: shotId}});
    this.dialog.afterAllClosed.subscribe(
      data => {
        this.dialog.closeAll();
        this.location.go('profile');
      }
    );
  }

  changeLikesAmount(index, likeInfo) {
    this.shots[index].likes = likeInfo.likes;
    this.shots[index].isLiked = likeInfo.isLiked;
  }

  ngOnInit() {
    this.userViewProjectsService.getUserInfo().subscribe(userInfo => {
      this.user = userInfo;
      this.user.avatar = `http://localhost:3000/${userInfo['avatar']}`;
    });

    this.userViewProjectsService.getProjectList().subscribe(shots => {
      this.shots = shots;
      for (const shot of this.shots) {
        shot.url = `http://localhost:3000/${shot.shotUrl}`;
        shot.isLiked = !!shot.likedBy.includes(localStorage.getItem('USER_ID'));
      }
    });
  }

}

