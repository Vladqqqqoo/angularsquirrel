import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {CommentsService} from './comments.service';
import {ActivatedRoute} from '@angular/router';
import {ShotAndCommentShareService} from '../shot-and-comment-share.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() shot;

  newCommentMessageForm: FormControl;
  comments: any;

  constructor(
    private shareService: ShotAndCommentShareService,
    private fb: FormBuilder,
    private commentsService: CommentsService,
    private route: ActivatedRoute,
  ) {
    this.newCommentMessageForm = this.fb.control('');
    this.commentsService.getComments(this.route.snapshot.params.shotId)
      .subscribe(
        comments => {
          this.comments = comments;
        }
      );
    this.shareService.subscribeOnChange().subscribe(data => {
        this.commentsService.getComments(data)
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
    const shotId = this.route.snapshot.params.shotId;
    this.commentsService.sendComment(commentMessage, shotId)
      .subscribe(
        data => {
          this.comments.push(data);
        }
      );
  }

  ngOnInit() {
  }

}
