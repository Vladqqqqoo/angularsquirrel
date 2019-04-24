import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenIntesrceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  private addTokenToRequest(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // intercept(request: HttpRequest<any>, next: HttpHandler): any {
  //   if (this.authService.getAccessToken()) {
  //     request = this.addTokenToRequest(request, this.authService.getAccessToken());
  //   }
  //   return next.handle(request).pipe(
  //     catchError(err => {
  //       if (err instanceof HttpErrorResponse && err.status === 401))
  //     }
  //   );
  // }

}
