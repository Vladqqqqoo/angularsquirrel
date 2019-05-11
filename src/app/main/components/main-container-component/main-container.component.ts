import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '../../../share/auth/auth.service';
import {MainContainerService} from './main-container.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {OneShotComponent} from '../../../share/one-shot/one-shot.component';

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
    public dialog: MatDialog,
    private authService: AuthService,
    private mainContainerService: MainContainerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  openPost(postId) {
    console.log(postId);
    this.router.navigate([`shot/${postId}`]);
  }

  openDialog(shotId) {
    setTimeout(() => {
      this.dialog.open(OneShotComponent, {data: {id: shotId}});
      this.dialog.afterAllClosed.subscribe(
        smth => {
          this.dialog.closeAll();
          this.router.navigate(['/']);
        }
      );
    });
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
     if (this.route.snapshot.params.shotId) {
      this.openDialog(this.route.snapshot.params.shotId);
    }
  }

}
