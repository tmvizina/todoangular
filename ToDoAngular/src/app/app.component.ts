import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { toDo } from './toDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoAngular';

  toDoList:toDo[]=[
    {name:"Wake Up", complete:true},
    {name:"Eat Breakfast", complete:true},    
    {name:"Work Out", complete:true},
    {name:"Kayak 10 miles", complete:true},
    {name:"Fold Laundry", complete:false},
    {name:"Clean Living Space", complete:false},
    {name:"Lose over 100lbs", complete:true},
    {name:"Look how I want", complete:false},
    {name:"Run continous mile",complete:false},
    {name:"Kayak half of Burt Lake", complete:false}
  ]
    addTask(form:NgForm){
      let entry:toDo={name:form.form.value.name,complete:false};
     
      
      
      this.toDoList.push(entry)
    }

    completeTask(index:number){
     

     this.toDoList[index].complete=true;
     
    }

    editTask(index:number, form:NgForm){
    let entry:toDo={name:form.form.value.name, complete:false};
    if (entry.name!==""){
    this.toDoList[index]=entry;
    }
    else {
      alert("Blank Tasks are not acceptable!")
    }
    }

    removeTask(index:number){
    this.toDoList.splice(index,1)
    }
    

  
}
