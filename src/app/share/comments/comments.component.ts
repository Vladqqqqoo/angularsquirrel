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

  private httpSubscription: Subscription;
  private eventSubscription: Subscription;

  constructor(
    private shareService: ShotAndCommentShareService,
    private commentsService: CommentsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.newCommentMessageForm = this.fb.control('');
  }

  sendComment() {
    const commentMessage = this.newCommentMessageForm.value;
    const shotId = this.route.snapshot.params.shotId;
    this.commentsService.sendComment(commentMessage, shotId)
      .subscribe(
        data => {
          this.comments.push(data);
        }
      );
  }

  ngOnInit() {
      this.eventSubscription =  this.shareService.subscribeOnChange().subscribe(data => {
        this.commentsService.getComments(data)
          .subscribe(
            comments => {
              this.comments = comments;
            }
          );
      }
    );
      this.httpSubscription = this.commentsService.getComments(this.route.snapshot.params.shotId)
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
