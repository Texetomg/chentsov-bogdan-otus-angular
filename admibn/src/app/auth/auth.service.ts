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
  baseUrl = 'http://localhost:3000/api';

  signup(payload: { login?: string; email?: string; password?: string }) {
    return this.httpClient.post(`${this.baseUrl}/users`, payload).pipe(
      tap((result: any) => {
        localStorage.setItem('token', JSON.stringify(result.token));
      })
    );
  }

  signin(payload: { email?: string; password?: string }) {
    return this.httpClient.post(`${this.baseUrl}/auth/login`, payload).pipe(
      tap((result: any) => {
        localStorage.setItem('token', JSON.stringify(result.token));
      })
    );
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  signout() {
    localStorage.removeItem('token');
  }
}
