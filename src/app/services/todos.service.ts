import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.model';
const baseUrl = 'http://localhost:8080/api/v1/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(baseUrl);
  }
  get(id: string) {
    return this.http.get<Todo>(`${baseUrl}/${id}`);
  }
  create(data: Todo): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id:string, data:{description: string}): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id:string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
