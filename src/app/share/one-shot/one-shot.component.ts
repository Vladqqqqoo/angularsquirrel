import {Component, Inject, OnInit, OnDestroy} from '@angular/core';
import {OneShotService} from './one-shot.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

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
    private oneShotService: OneShotService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  openPreviousShot() {
    this.location.go(`shots/${this.prevShot._id}`);
    this.shotImageUrl = `http://localhost:3000/${this.prevShot.shotUrl}`;
    this.oneShotService.getOneShot(this.prevShot._id).subscribe(
      prev => {
        this.shot = prev.currentShot;
        this.prevShot = prev.prevShot;
        this.nextShot = prev.nextShot;
      }
    );
  }

  openNextShot() {
    this.location.go(`shots/${this.nextShot._id}`);
    this.shotImageUrl = `http://localhost:3000/${this.nextShot.shotUrl}`;
    this.oneShotService.getOneShot(this.nextShot._id).subscribe(
      next => {
        this.shot = next.currentShot;
        this.nextShot = next.nextShot;
        this.prevShot = next.prevShot;
      }
    );
  }


  ngOnInit() {
    if (this.data.id) {
      this.shotId = this.data.id;
    } else if (this.route.snapshot.params.shotId) {
      this.shotId = this.route.snapshot.params.shotId;
    }
    this.oneShotService.getOneShot(this.shotId).subscribe(shot => {
      this.nextShot = shot.nextShot;
      this.prevShot = shot.prevShot;
      this.shot = shot.currentShot;
      this.shotImageUrl = `http://localhost:3000/${shot.currentShot.shotUrl}`;
    } );
  }

}
