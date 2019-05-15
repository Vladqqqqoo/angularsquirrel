import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {CommentsService} from './comments.service';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  newCommentMessageForm: FormControl;

  constructor(
    private fb: FormBuilder,
    private commentsService: CommentsService,
    private route: ActivatedRoute
  ) {
    this.newCommentMessageForm = this.fb.control('');
  }

  sendComment() {
    const commentMessage = this.newCommentMessageForm.value;
    const shotId = this.route.snapshot.params.shotId;
    this.commentsService.sendComment(commentMessage, shotId);
  }

  ngOnInit() {

  }

}
