import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import{HttpClient , HttpHeaders} from '@angular/common/http';
import { Task } from '../task';
import { Observable, of } from 'rxjs';

const httpOption ={
  headers: new HttpHeaders({
    'hdhdj':'dhdjd'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
   
  deleteTask(task:Task):Observable<Task>{
    const Url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(Url)
  }

  UpdateReminder(task:Task):Observable<Task>{
    const Url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(Url , task , httpOption )
  }

  AddTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl , task,httpOption)
  }
}
