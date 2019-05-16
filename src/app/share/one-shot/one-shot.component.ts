import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {OneShotService} from './one-shot.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ShotAndCommentShareService} from '../shot-and-comment-share.service';

@Component({
  selector: 'app-one-shot',
  templateUrl: './one-shot.component.html',
  styleUrls: ['./one-shot.component.scss']
})
export class OneShotComponent implements OnInit {

  shotId: string;
  shot: any;
  shotImageUrl: string;
  nextShot: any;
  prevShot: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private shareService: ShotAndCommentShareService,
    private oneShotService: OneShotService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  openPreviousShot() {
    if (!this.prevShot) {

    } else {
      this.shareService.emitChange(this.prevShot._id);
      this.location.go(`shots/${this.prevShot._id}`);
      // this.shot = this.prevShot;
      this.shotImageUrl = `http://localhost:3000/${this.prevShot.shotUrl}`;
      this.oneShotService.getOneShot(this.prevShot._id).subscribe(
        prev => {
          this.shot = prev.currentShot;
          this.prevShot = prev.prevShot;
          this.nextShot = prev.nextShot;
          this.isLiked();
        }
      );
    }
  }

  openNextShot() {
    if (!this.nextShot) {

    } else {
      this.shareService.emitChange(this.nextShot._id);
      this.location.go(`shots/${this.nextShot._id}`);
      this.shotImageUrl = `http://localhost:3000/${this.nextShot.shotUrl}`;
      // this.shot = this.nextShot;
      this.oneShotService.getOneShot(this.nextShot._id).subscribe(
        next => {
          this.shot = next.currentShot;
          this.nextShot = next.nextShot;
          this.prevShot = next.prevShot;
          this.isLiked();
        }
      );
    }
  }

  changeLikesAmount(likeInfo) {
    this.shot.likes = likeInfo.likes;
    this.shot.isLiked = likeInfo.isLiked;
  }

  isLiked() {
    this.shot.isLiked = !!this.shot.likedBy.includes(localStorage.getItem('USER_ID'));
  }

  ngOnInit() {
    if (this.data.id) {
      this.shotId = this.data.id;
      this.shareService.emitChange(this.shotId);
    } else if (this.route.snapshot.params.shotId) {
      this.shotId = this.route.snapshot.params.shotId;
    }
    this.oneShotService.getOneShot(this.shotId).subscribe(shot => {
      this.nextShot = shot.nextShot;
      this.prevShot = shot.prevShot;
      this.shot = shot.currentShot;
      this.shotImageUrl = `http://localhost:3000/${shot.currentShot.shotUrl}`;
      this.isLiked();
    } );
  }

}
