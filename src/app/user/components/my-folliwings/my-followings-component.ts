import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-networks',
  templateUrl: './my-followings-component.html',
  styleUrls: ['./my-followings-component.scss']
})
export class MyFollowingsComponent implements OnInit {

  firstName: string;
  lastName: string;

  constructor() { }

  users = [
    {
      firstName: 'Vlad',
      lastName: 'Vlad'
    },
    {
      firstName: 'Vlad',
      lastName: 'Vlad'
    },
    {
      firstName: 'Vlad',
      lastName: 'Vlad'
    }
  ];


  ngOnInit() {}

}
