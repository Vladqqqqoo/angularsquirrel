import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '../../../share/auth/auth.service';
import {MainContainerService} from './main-container.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {OneShotComponent} from '../../../share/one-shot/one-shot.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-main-container-component',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss',
    '../../../grid.scss']
})
export class MainContainerComponent implements OnInit {

  shots: any;


  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private location: Location,
    public dialog: MatDialog,
    private authService: AuthService,
    private mainContainerService: MainContainerService,
    private router: Router,
  ) {
  }

  sendLike(index, id) {
    this.mainContainerService.sendLike(id).subscribe(
      likeInfo => {
        console.log(likeInfo);
        this.shots[index].likes = likeInfo.likes;
        this.shots[index].isLiked = likeInfo.isLiked;
      }
    );
  }


  openPost(shotId) {
    this.location.go(`shots/${shotId}`);
    this.openDialog(shotId);
  }

  openDialog(shotId) {
    this.dialog.open(OneShotComponent, {data: {id: shotId}});
    this.dialog.afterAllClosed.subscribe(
      smth => {
        this.dialog.closeAll();
        this.location.go('/');
      }
    );
  }

  ngOnInit() {
    this.mainContainerService.getAllPost().subscribe(
      shots => {
        this.shots = shots;
        for (const shot of this.shots) {
          shot.url = `http://localhost:3000/${shot.shotUrl}`;
          if (shot.likedBy.includes(localStorage.getItem('USER_ID'))) {
            shot.isLiked = true;
          } else {
            shot.isLiked = false;
          }
        }
        console.log(shots);
      }
    );
  }

}
