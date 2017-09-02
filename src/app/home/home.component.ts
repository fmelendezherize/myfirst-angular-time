import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private searchService: TodoServiceService) { 
    this.getTodoData();
  }

  data: any; // This will hold the data coming from the service

  private getTodoData() {
    return this.searchService.getTodoList()
    .subscribe(data => { this.data = data;
                         console.log(this.data);
                        });
  }
  
  ngOnInit() {
  }

}
