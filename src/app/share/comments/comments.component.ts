import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {CommentsService} from './comments.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  newCommentMessageForm: FormControl;
  comments: any;

  constructor(
    private fb: FormBuilder,
    private commentsService: CommentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.newCommentMessageForm = this.fb.control('');
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          console.log(this.route.snapshot.params.shotId);
          this.commentsService.getComments(this.route.snapshot.params.shotId)
            .subscribe(
              comments => {
                this.comments = comments;
              }
            );
        }
      }
    );
  }

  sendComment() {
    const commentMessage = this.newCommentMessageForm.value;
    const shotId = this.route.snapshot.params.shotId;
    this.commentsService.sendComment(commentMessage, shotId)
      .subscribe(
        data => {
          this.comments.push(data);
          console.log(data);
        }
      );
  }

  ngOnInit() {

  }

}
