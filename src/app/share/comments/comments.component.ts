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

  private httpSubscription: Subscription;
  private eventSubscription: Subscription;

  constructor(
    private shareService: ShotAndCommentShareService,
    private commentsService: CommentsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.newCommentMessageForm = this.fb.control('');
    this.eventSubscription =  this.shareService.subscribeOnChange().subscribe(data => {
      this.shotId = data;
      this.commentsService.getComments(this.shotId)
          .subscribe(
            comments => {
              this.comments = comments;
            }
          );
      }
    );
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
    this.shotId = this.route.snapshot.params.shotId;
    this.httpSubscription = this.commentsService.getComments(this.shotId)
      .subscribe(
        comments => {
          this.comments = comments;
        });
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
    this.httpSubscription.unsubscribe();
  }

}
