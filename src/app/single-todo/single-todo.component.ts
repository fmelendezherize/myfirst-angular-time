import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import {ActivatedRoute} from "@angular/router";
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})

export class SingleTodoComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,
              private searchService: TodoServiceService,
              private router: Router) {
    this.route.params.subscribe( params => {
      this.currentId = params['id']
      this.getTodoSingle(this.currentId) ;
    });
  }
   
  ngOnInit() {
  }

  data: any; // This will hold the data coming from the service
  currentId: number;
  
  private getTodoSingle(id: number) {
    return this.searchService.getTodoSingle(id)
    .subscribe(data => { this.data = data;
                         console.log(this.data);
                         this.currentId = id;
                        });                        
  }

  private deleteTodoSingle() {
    this.searchService.deleteTodoSingle(this.currentId).
    subscribe(data => {
      console.log(data);
      if (data.status == 200)
      {
        console.log("Todo bien delete")
        this.router.navigate(['/']); // ON SUCCESS
      }
    });
  }
}