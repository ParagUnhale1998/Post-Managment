import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get(this.baseUrl).pipe(
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Something bad happened; please try again later.'));      })
    );
  }
  getPostByID(id: any) {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Something bad happened; please try again later.'));      })
    );;
  }
  addpost(paylaod: any) {
    return this.http.post(this.baseUrl, paylaod).pipe(
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Something bad happened; please try again later.'));      })
    );;
  }
}
