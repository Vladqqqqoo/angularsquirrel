import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LikeService} from './like.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input() shot;
  @Output() changeLikes = new EventEmitter();

  constructor(private likeService: LikeService) {}

  sendLike(id) {
    this.likeService.sendLike(id).subscribe(
      likeInfo => {
        this.changeLikes.emit(likeInfo);
        console.log(likeInfo);
      }
    );
  }

  ngOnInit() {
  }

}
