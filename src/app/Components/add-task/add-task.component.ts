import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
    @Output() onAddTask : EventEmitter<Task> = new EventEmitter()
    text:string | undefined ;
    day:string | any;
    reminder: boolean = false;
    subscription:Subscription | undefined
    showAddTask:boolean | undefined;

 
  constructor( private uiService:UiService ) {
    this.subscription = this.uiService.onToggle().subscribe(value=>(this.showAddTask = value))
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('please add aa task!')
      return ;
    }

   const newTask = {
     text:this.text,
     day:this.day,
     reminder:this.reminder,
   }

   this.onAddTask.emit(newTask)

   this.text ='',
   this.day = '',
   this.reminder = false
  }

}
