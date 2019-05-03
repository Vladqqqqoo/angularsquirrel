import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

  constructor(private httpClient: HttpClient) {
  }

  signUp(user): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/signup', user).pipe(
      catchError(error => {
        return throwError( new Error(error));
      })
    );
  }

  signIn(user): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/login', user).pipe(
      catchError(err => {
        return throwError( new Error(err));
      })
    );
  }

  logOut(): Observable<any> {
    const userToken = {
      refreshToken: this.getRefreshToken()
    };
    this.removeTokens();
    return this.httpClient.post('http://localhost:3000/users/logout', userToken).pipe(
      catchError(err => {
        return throwError( new Error(err));
      })
    );
  }

  isLoggedIn() {
    return this.getAccessToken();
  }

  getAccessToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  setTokens(tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

  refreshToken() {
    return this.httpClient.post('http://localhost:3000/users/refresh', {
      refreshToken: this.getRefreshToken(),
    });
  }

}
