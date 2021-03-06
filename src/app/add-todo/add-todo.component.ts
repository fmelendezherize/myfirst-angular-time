import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../TodoModel'
import { TodoServiceService } from '../todo-service.service';
import { NgModel } from '@angular/forms';
import { NavigationExtras } from '@angular/router';

import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  errorMessage: String;
  todoModel = new TodoModel(); 
  constructor(private searchService: TodoServiceService,
              private router: Router) { }

  ngOnInit() {
  }

  private onSubmit(){
    this.searchService.addTodoSingle(this.todoModel)
    .subscribe(data => {
      console.log(data);
      if (data.status == 200)
      {
        console.log("Todo bien")
        this.router.navigate(['/']); // ON SUCCESS
      }
    });
  }
}
