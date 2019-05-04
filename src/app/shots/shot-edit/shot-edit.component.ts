import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ShotService} from '../shot.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-shot-info',
  templateUrl: './shot-edit.component.html',
  styleUrls: ['./shot-edit.component.scss']
})
export class ShotEditComponent implements OnInit {
  shotForm: FormGroup;
  imageUrl: string;


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
    this.shotService.putShot(id, putInfo).subscribe(data => {
    this.router.navigate(['../../']);
    });
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.shotService.getShot(id).subscribe((data) => {
      this.imageUrl = `http://localhost:3000/${data.shotUrl}`;
      const array = Object.keys(this.shotForm.getRawValue());
      for ( const key of array) {
        this.shotForm.get(key).setValue(data[key]);
      }
    });
  }

}