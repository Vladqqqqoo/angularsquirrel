import {Component, OnInit} from '@angular/core';
import {FileItem, FileUploader, ParsedResponseHeaders} from 'ng2-file-upload';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../share/auth/auth.service';
import {Router} from '@angular/router';

const URL = 'http://localhost:3000/shot/';

@Component({
  selector: 'app-new-shot',
  templateUrl: './new-shot.component.html',
  styleUrls: ['./new-shot.component.scss']
})


export class NewShotComponent implements OnInit {

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private authService: AuthService,
  ) {
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
  }

  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver = false;

  public fileOverBase(e: any) {
    this.hasBaseDropZoneOver = e;
  }

  dropFile(e: any) {
    this.uploader.options.queueLimit = 1;
  }

  onSuccessItem(item: FileItem, response: any, status: number, headers: ParsedResponseHeaders): any {
    const object = JSON.parse(response);
    this.router.navigate([`shots/${object._id}`]);
  }

  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    if (status === 401) {
      this.authService.refreshToken().subscribe((tokens) => {
        this.authService.setTokens(tokens);
        this.uploader.setOptions({authToken: `Bearer ${tokens['jwt']}`});
        this.uploader.queue[0].upload();
      });
    }
  }


  ngOnInit() {
  }

}
