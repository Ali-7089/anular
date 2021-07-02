import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import{HttpClient , HttpHeaders} from '@angular/common/http';
import { Task } from '../task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
 getTasks(){
   
 }
}
