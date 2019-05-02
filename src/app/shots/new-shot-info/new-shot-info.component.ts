import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-shot-info',
  templateUrl: './new-shot-info.component.html',
  styleUrls: ['./new-shot-info.component.scss']
})
export class NewShotInfoComponent implements OnInit {
  shotForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {
    this.shotForm = fb.group({
      title: [''],
      tags: [''],
      description: ['']
    });
  }

  postShot() {
    const postInfo = this.shotForm.value;
  }


  ngOnInit() {
  }

}
