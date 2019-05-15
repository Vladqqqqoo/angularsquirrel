import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators/tap';
import {PreloaderService} from "./preloader.service";

@Injectable({
  providedIn: 'root'
})
export class PreloaderInterceptor implements HttpInterceptor {

  constructor(private preloaderService: PreloaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.preloaderService.loading(true);
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.preloaderService.loading(false);
        }
      })
    );
  }
}
