import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public getTasks(): Observable<any> {
    return this.http.get<any>('tasks').pipe(
      catchError((err) => {
        throw new Error(err);
      })
    );
  }

  public getUsers(): Observable<any> {
    return this.http.get<any>('users').pipe(
      catchError((err) => {
        throw new Error(err);
      })
    );
  }
}
