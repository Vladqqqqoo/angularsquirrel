import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  constructor(
    private http: HttpClient
  ) { }

  signUp(request): Observable<any> {
    delete request.confirmPassword;
    console.log(request);
    return this.http.post('http://localhost:3000/users/signup', request);
  }

  signIn(request): Observable<any> {
    return this.http.post('http://localhost:3000/users/login', request);
  }

    signOut(): Observable<any> {
      const req = this.getRefreshToken();
      return this.http.post('http://localhost:3000/users/logout', req).pipe(

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

}
