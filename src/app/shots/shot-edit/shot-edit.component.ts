import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ShotService} from '../shot.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-new-shot-info',
  templateUrl: './shot-edit.component.html',
  styleUrls: ['./shot-edit.component.scss']
})
export class ShotEditComponent implements OnInit, OnDestroy {
  private shotForm: FormGroup;
  private imageUrl: string;
  private httpSubscription: Subscription;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private shotService: ShotService,
    private activatedRoute: ActivatedRoute
  ) {
    this.shotForm = fb.group({
      title: [''],
      tags: [''],
      description: ['']
    });
  }

  putShot() {
    const putInfo = this.shotForm.value;
    const id = this.activatedRoute.snapshot.params.id;
    this.httpSubscription.unsubscribe();
    this.httpSubscription = this.shotService.putShot(id, putInfo).subscribe(data => {
    this.router.navigate(['../../profile']);
    });
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.httpSubscription = this.shotService.getShot(id).subscribe((data) => {
      const editShot = data.currentShot;
      this.imageUrl = `http://localhost:3000/${editShot.shotUrl}`;
      const array = Object.keys(this.shotForm.getRawValue());
      for ( const key of array) {
        this.shotForm.get(key).setValue(editShot[key]);
      }
    });
  }

  ngOnDestroy(): void {
    this.httpSubscription.unsubscribe();
  }

}
