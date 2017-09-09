import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../TodoModel'
import { TodoServiceService } from '../todo-service.service';
import { NgModel } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  my_id: number;
  data: any[];

  constructor(private route: ActivatedRoute,
              private searchService: TodoServiceService,
              private router: Router) { 
    this.route.params.subscribe( params => {
      this.my_id = params['id'];
      console.log("edit: " + this.my_id);
      this.getTodoSingle(this.my_id); 
    });
  }

  ngOnInit() {
  }

  private getTodoSingle(id: number) {
    return this.searchService.getTodoSingle(id)
    .subscribe(data => { 
        this.data = data;
        console.log(this.data);
    });                        
  }

  private onSubmit(){
    this.searchService.updateTodoSingle(this.my_id, this.data)
    .subscribe(data => {
      console.log(data);
      if (data.status == 200)
      {
        console.log("Todo bien edit")
        this.router.navigate([`single-todo/${this.my_id}`]); // ON SUCCESS
      }
    });
  }
}
