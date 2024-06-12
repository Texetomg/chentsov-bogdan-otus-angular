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

  public patchTask(payload: any) {
    return this.http.patch<any>(`tasks/${payload.id}`, payload).pipe(
      catchError((err) => {
        throw new Error(err);
      })
    );
  }

  public postTask(payload: any) {
    return this.http.post<any>(`tasks`, payload).pipe(
      catchError((err) => {
        throw new Error(err);
      })
    );
  }

  public deleteTask(id: any) {
    console.log(id)
    return this.http.delete<any>(`tasks/${id}`).pipe(
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

  public getTags(): Observable<any> {
    return this.http.get<any>('tags').pipe(
      catchError((err) => {
        throw new Error(err);
      })
    );
  }
}
