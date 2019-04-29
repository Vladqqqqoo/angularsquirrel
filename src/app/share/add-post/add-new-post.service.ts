import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddNewPostService {

  constructor() { }

  addOnePost() {
    console.log('Add post');
  }
}
