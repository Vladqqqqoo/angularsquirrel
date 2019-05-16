import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {CommentsService} from './comments.service';
import {ActivatedRoute} from '@angular/router';
import {ShotAndCommentShareService} from '../shot-and-comment-share.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {

  newCommentMessageForm: FormControl;
  comments: any;
  shotId: any;
  urlId: any = true;

  private httpSubscription: Subscription;
  private eventSubscription: Subscription;

  constructor(
    private shareService: ShotAndCommentShareService,
    private commentsService: CommentsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.newCommentMessageForm = this.fb.control('');
    if (this.urlId) {
      this.shotId = this.route.snapshot.params.shotId;
      this.getAllComments();
    }
    this.eventSubscription =  this.shareService.subscribeOnChange().subscribe(data => {
        this.shotId = data;
        this.getAllComments();
        this.urlId = false;
      }
    );
  }

  getAllComments() {
    this.httpSubscription = this.commentsService.getComments(this.shotId)
      .subscribe(
        comments => {
          this.comments = comments;
        });
  }

  sendComment() {
    const commentMessage = this.newCommentMessageForm.value;
    this.commentsService.sendComment(commentMessage, this.shotId)
      .subscribe(
        data => {
          this.comments.push(data);
        }
      );
  }

  ngOnInit() {
    if (this.route.snapshot.params.shotId) {
      this.urlId = true;
    }
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
    this.httpSubscription.unsubscribe();
  }

}
