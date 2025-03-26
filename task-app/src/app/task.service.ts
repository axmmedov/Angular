import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<{ id: number; task: string }[]> {
    return this.http.get<{ id: number; task: string }[]>(this.url);
  }

  addTask(task: string): Observable<any> {
    return this.http.post(this.url, { task });
  }
}