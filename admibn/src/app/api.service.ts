import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImVtYWlsIjoiMTIzQDEyMy5ydSIsImxvZ2luIjoiMTIzIiwiaWF0IjoxNzE3NDI5NzQ3LCJleHAiOjE3MTgwMzQ1NDd9.la6Og96CqVguApeCLTvS380MiS3ckd1iR2D64a_OOa4';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  api = 'http://localhost:3000/api/tasks';
  public getTasks(): Observable<any> {
    return this.http
      .get<any>(this.api, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .pipe(
        catchError((err) => {
          throw new Error(err);
        })
      );
  }
}
