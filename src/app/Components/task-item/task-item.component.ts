import { Component, Input, OnInit ,Output } from '@angular/core';
import { Task } from 'src/app/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() Task:any;
  faTimes = faTimes
  
  constructor() { }

  ngOnInit(): void {
   
  }

  onDelete(id){
    console.log(id)
  }

 

}
