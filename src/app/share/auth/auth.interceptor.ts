import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {switchMap} from 'rxjs/internal/operators/switchMap';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

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

   handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    return this.authService.refreshToken().pipe(
      switchMap((tokens: any) => {
        this.authService.setTokens(tokens);
        return next.handle(this.addTokenToRequest(request, tokens.jwt));
      }));
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    if (this.authService.getAccessToken()) {
      request = this.addTokenToRequest(request, this.authService.getAccessToken());
    }

    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(request, next);
      } else if (error.status === 403) {
        this.authService.logOut().subscribe(() => {
           this.router.navigate(['../']);
        },
          error => {
          console.log(error);
          });
      } else {
        return throwError(error);
      }
    }));
  }

}
