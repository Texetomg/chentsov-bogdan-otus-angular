import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  httpClient = inject(HttpClient);

  user: any = null

  signup(payload: { login?: string; email?: string; password?: string }) {
    return this.httpClient.post(`users`, payload).pipe(
      tap((result: any) => {
        localStorage.setItem('token', result.token);
      })
    );
  }

  signin(payload: { email?: string; password?: string }) {
    return this.httpClient.post(`auth/login`, payload).pipe(
      tap((result: any) => {
        localStorage.setItem('token', result.token);
      })
    );
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  signout() {
    localStorage.removeItem('token');
  }

  whoami() {
    return this.httpClient.get(`auth/profile`).pipe(
      tap((result: any) => {
        this.user = result
      })
    );
  }

  getUserLogin() {
    return this.user?.login || 'a'
  }
}
