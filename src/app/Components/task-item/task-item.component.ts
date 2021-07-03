import { Component, Input, OnInit ,Output , EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() Task:any;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter()
  @Output() ontoggleReminder:EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes

  
  constructor() { }

  ngOnInit(): void {
   
  }

 onDelete(Task){
  this.onDeleteTask.emit(Task)

 }
 ontoggle(Task){
  this.ontoggleReminder.emit(Task)

 }


}
