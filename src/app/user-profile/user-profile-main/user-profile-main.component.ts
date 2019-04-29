import { Component, OnInit } from '@angular/core';
import {AddNewPostService} from '../../share/add-post/add-new-post.service';

@Component({
  selector: 'app-user-profile-main',
  templateUrl: './user-profile-main.component.html',
  styleUrls: ['./user-profile-main.component.scss']
})
export class UserProfileMainComponent implements OnInit {

  constructor(
    addNewPostService: AddNewPostService
  ) { }

  ngOnInit() {
  }

}
