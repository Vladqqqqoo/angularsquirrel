import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '../../../share/auth/auth.service';
import {MainContainerService} from './main-container.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {OneShotContainerComponent} from '../../../share/one-shot-container/one-shot-container.component';
import {OneShotContainerService} from '../../../share/one-shot-container/one-shot-container.service';

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
    private oneShotService: OneShotContainerService,
    public dialog: MatDialog,
    private authService: AuthService,
    private mainContainerService: MainContainerService,
    private router: Router
  ) { }

  openPost(e) {
    const postId = e.target.attributes.id.value;
    this.dialog.open(OneShotContainerComponent, {data: {id: postId}});
    // this.router.navigate([`./shots/${postId}`]);
  }

  ngOnInit() {
    this.mainContainerService.getAllPost().subscribe(
      shots => {
        this.posts = shots;
        console.log(shots);
        for (const post of this.posts) {
          post.url = `http://localhost:3000/${post.shotUrl}`;
        }
      }
    );
  }

}
