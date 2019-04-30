import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

const URL = 'my-backend.com/file-upload';

@Component({
  selector: 'app-new-shot',
  templateUrl: './new-shot.component.html',
  styleUrls: ['./new-shot.component.scss']
})


export class NewShotComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  public fileOverBase(e: any) {
    this.hasBaseDropZoneOver = e;
    console.log(this.uploader);
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;

  }

  constructor() { }

  ngOnInit() {
  }

}
