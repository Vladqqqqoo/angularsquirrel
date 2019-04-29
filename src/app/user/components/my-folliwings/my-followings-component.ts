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
      lastName: 'Drobovich',
      image: 'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg'
    },
    {
      firstName: 'Vlad',
      lastName: 'Drobovich',
      image: 'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg'
    },
    {
      firstName: 'Vlad',
      lastName: 'Drobovich',
      image: 'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg'
    }
  ];


  ngOnInit() {}

}
