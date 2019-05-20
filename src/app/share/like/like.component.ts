import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {LikeService} from './like.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit, OnDestroy {

  @Input() shot;
  @Output() changeLikes = new EventEmitter();
  private likeSubscription: Subscription;

  constructor(private likeService: LikeService) {}

  sendLike(id) {
    this.likeSubscription = this.likeService.sendLike(id).subscribe(
      likeInfo => {
        this.changeLikes.emit(likeInfo);
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.likeSubscription) {
      this.likeSubscription.unsubscribe();
    }
  }

}
