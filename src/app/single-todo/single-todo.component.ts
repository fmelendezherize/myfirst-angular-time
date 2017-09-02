import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})

export class SingleTodoComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,
              private searchService: TodoServiceService) {
    this.route.params.subscribe( params => this.getTodoSingle(params['id']) );
  }
   
  ngOnInit() {
  }

  data: any; // This will hold the data coming from the service
  
  private getTodoSingle(id: number) {
    return this.searchService.getTodoSingle(id)
    .subscribe(data => { this.data = data;
                         console.log(this.data);
                        });
  }
}


// export class SingleTodoComponent implements OnInit {
//   id: string;

//   constructor(private searchService: TodoServiceService) {
//     this.getTodoData(this.id);
//   }

//   data: any; // This will hold the data coming from the service

//   private getTodoData(id: string) {
//     return this.searchService.getTodoSingle(id)
//     .subscribe(data => { this.data = data;
//                          console.log(this.data);
//                         });
//   }

//   ngOnInit() {
//   }
// }
