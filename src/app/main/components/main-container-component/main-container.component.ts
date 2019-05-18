import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../share/auth/auth.service';
import {MainContainerService} from './main-container.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {OneShotComponent} from '../../../share/one-shot/one-shot.component';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-main-container-component',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss',
    '../../../grid.scss']
})
export class MainContainerComponent implements OnInit, OnDestroy {

  private shots: any;

  private httpSubscription: Subscription;
  private dialogSubscription: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,

    private location: Location,
    public dialog: MatDialog,
    private authService: AuthService,
    private mainContainerService: MainContainerService,
  ) {
  }

  changeLikesAmount(index, likeInfo) {
    this.shots[index].likes = likeInfo.likes;
    this.shots[index].isLiked = likeInfo.isLiked;
  }


  openPost(shotId) {
    this.location.go(`shots/${shotId}`);
    this.openDialog(shotId);
  }

  openDialog(shotId) {
    this.dialog.open(OneShotComponent, {
      data: {id: shotId,
            userId: false
      },
      panelClass: 'modalWindow',
    });
    this.dialogSubscription = this.dialog.afterAllClosed.subscribe(
      () => {
        this.dialog.closeAll();
        this.location.go('/');
      }
    );
  }

  ngOnInit() {
    this.httpSubscription = this.mainContainerService.getAllPost().subscribe(
      shots => {
        this.shots = shots;
        for (const shot of this.shots) {
          shot.url = `http://localhost:3000/${shot.shotUrl}`;
          shot.isLiked = !!shot.likedBy.includes(localStorage.getItem('USER_ID'));
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.httpSubscription.unsubscribe();
    this.dialogSubscription.unsubscribe();
  }


}
