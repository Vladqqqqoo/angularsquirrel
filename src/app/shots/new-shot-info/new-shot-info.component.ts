import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ShotService} from "../shot.service";

@Component({
  selector: 'app-new-shot-info',
  templateUrl: './new-shot-info.component.html',
  styleUrls: ['./new-shot-info.component.scss']
})
export class NewShotInfoComponent implements OnInit {
  shotForm: FormGroup;
  imageUrl: String;


  constructor(
    private fb: FormBuilder,
    private shotService: ShotService
  ) {
    this.shotForm = fb.group({
      title: [''],
      tags: [''],
      description: ['']
    });
  }

  putShot() {
    const putInfo = this.shotForm.value;
    this.shotService.putShot(putInfo).subscribe(data => {
      console.log(data);
    })
  }


  ngOnInit() {
    this.shotService.getShot().subscribe((data) => {
      console.log(data);
      this.imageUrl = `http://localhost:3000/${data['shotUrl']}`;
    });
  }

}
