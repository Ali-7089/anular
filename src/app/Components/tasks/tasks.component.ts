import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[]=[]
  

  constructor(private taskService:TaskService) {
    console.log(this.tasks)
   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>this.tasks = tasks
    )
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>(this.tasks = this.tasks.filter(t=> t.id !== task.id)))
  }

  toggleTask(task){
    task.reminder = !task.reminder
    this.taskService.UpdateReminder(task).subscribe()
    console.log(!task.reminder)
  }

  AddTask(task:Task){
    this.taskService.AddTask(task).subscribe((task)=> this.tasks.push(task))
  }
 

}
