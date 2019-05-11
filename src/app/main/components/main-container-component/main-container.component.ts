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

  posts: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private location: Location,
    public dialog: MatDialog,
    private authService: AuthService,
    private mainContainerService: MainContainerService,
    private router: Router,
  ) {
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
        this.posts = shots;
        for (const post of this.posts) {
          post.url = `http://localhost:3000/${post.shotUrl}`;
        }
      }
    );
  }

}
