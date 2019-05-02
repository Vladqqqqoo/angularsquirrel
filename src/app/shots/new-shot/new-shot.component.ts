import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {HttpClient} from '@angular/common/http';

const URL = 'my-backend.com/file-upload';

@Component({
  selector: 'app-new-shot',
  templateUrl: './new-shot.component.html',
  styleUrls: ['./new-shot.component.scss']
})


export class NewShotComponent implements OnInit {

  constructor(
    private httpClient: HttpClient
  ) { }

  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver = false;

  public fileOverBase(e: any) {
    this.hasBaseDropZoneOver = e;
    console.log(1);
  }

  dropFile(e: any) {
    console.log(this.uploader);
    this.uploader.options.queueLimit = 1;
  }


  ngOnInit() {
  }

}
