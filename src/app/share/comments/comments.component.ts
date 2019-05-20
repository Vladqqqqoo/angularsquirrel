import {Component, Input, OnDestroy, OnInit} from '@angular/core';
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

  private newCommentMessageForm: FormControl;
  private editCommentForm: FormControl;
  private comments: any;
  private shotId: any;
  private commentatorId: any;

  private httpSubscription: Subscription;
  private eventSubscription: Subscription;

  @Input() shot;


  constructor(
    private shareService: ShotAndCommentShareService,
    private commentsService: CommentsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.newCommentMessageForm = this.fb.control('');
    this.editCommentForm = this.fb.control({disabled: true});

    if (this.route.snapshot.params.shotId) {
      this.shotId = this.route.snapshot.params.shotId;
      this.getAllComments();
      this.getChangeEvent();
    } else {
      this.eventSubscription = this.shareService.subscribeOnChange().subscribe(data => {
          this.shotId = data;
          this.getAllComments();
        }
      );
    }
  }

  getAllComments() {
    this.httpSubscription = this.commentsService.getComments(this.shotId)
      .subscribe(
        comments => {
          this.comments = comments;
        });
  }

  getChangeEvent() {
    this.eventSubscription = this.shareService.subscribeOnChange().subscribe(data => {
        this.shotId = data;
        this.getAllComments();
      }
    );
  }

  deleteComment(id) {
    this.commentsService.deleteOneComment(id).subscribe(
      () => {
        this.commentsService.getComments(this.shotId).subscribe(
          comments => {
            this.comments = comments;
          });
      }
    );
  }

  editComment(id, index, inputForm) {
    if (inputForm.disabled) {
      inputForm.disabled = false;
    } else {
      this.commentsService.updateOneComment(id, inputForm.value).subscribe(() => {
        this.commentsService.getComments(this.shotId).subscribe(data => {
          this.comments = data;
        });
      });
      inputForm.disabled = true;
    }
  }

  sendComment() {
    const commentMessage = this.newCommentMessageForm.value;
    this.commentsService.sendComment(commentMessage, this.shotId)
      .subscribe(
        data => {
          this.comments.push(data[0]);
        }
      );
  }

  ngOnInit() {
    this.commentatorId = localStorage.getItem('USER_ID');
    this.editCommentForm.disable();
  }

  ngOnDestroy(): void {
    this.httpSubscription.unsubscribe();
    this.eventSubscription.unsubscribe();
  }
}
