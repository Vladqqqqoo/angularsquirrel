import {Component, Inject, OnInit} from '@angular/core';
import {OneShotService} from './one-shot.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-one-shot',
  templateUrl: './one-shot.component.html',
  styleUrls: ['./one-shot.component.scss']
})
export class OneShotComponent implements OnInit {

  shot: any;
  shotImageUrl: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private oneShotService: OneShotService
  ) { }

  previousShot() {
    console.log('prev');
  }

  nextShot() {
    console.log('next');
  }

  ngOnInit() {
    this.oneShotService.getOneShot(this.data.id).subscribe(shot => {
      this.shot = shot;
      this.shotImageUrl = `http://localhost:3000/${shot.shotUrl}`;
    } );
  }

}
