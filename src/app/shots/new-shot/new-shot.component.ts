import {Component, OnInit} from '@angular/core';
import {FileItem, FileUploader, ParsedResponseHeaders} from 'ng2-file-upload';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../share/auth/auth.service';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {ToastrService} from 'ngx-toastr';
import {Subscription} from 'rxjs';

const URL = 'http://localhost:3000/shot/';

@Component({
  selector: 'app-new-shot',
  templateUrl: './new-shot.component.html',
  styleUrls: ['./new-shot.component.scss']
})


export class NewShotComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver = false;

  public uloadImg;
  public imageWidth;
  public imageHeight;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private authService: AuthService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService
  ) {
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onAfterAddingFile = (fileItem) => {
      this.uloadImg = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
      const img = new Image();
      img.src = window.URL.createObjectURL(fileItem._file);
      img.onload = () => {
        this.imageWidth = img.naturalWidth;
        this.imageHeight = img.naturalHeight;
        if ((this.imageWidth < 600) || (this.imageHeight < 400)) {
          this.toastr.warning('Your should be at least 600x400', 'Uploading failed', {
            progressBar: false,
            positionClass: 'toast-center-center-upload',
            timeOut: 3000,
            extendedTimeOut: 1000,
          });
          this.uploader.clearQueue();
        }
      };
    };
  }


  public fileOverBase(e: any) {
    this.hasBaseDropZoneOver = e;
  }

  dropFile(e: any) {
    this.uploader.options.queueLimit = 1;
    console.log(this.imageHeight);
  }

  onSuccessItem(item: FileItem, response: any, status: number, headers: ParsedResponseHeaders): any {
    const object = JSON.parse(response);
    this.router.navigate([`shots/edit/${object._id}`]);
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
    this.uploader.setOptions({authToken: `Bearer ${this.authService.getAccessToken()}`});

  }

}
