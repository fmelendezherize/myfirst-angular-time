import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from "@angular/http";
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoServiceService } from './todo-service.service';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'single-todo/:id', component: SingleTodoComponent },
  { path: 'add-todo', component: AddTodoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleTodoComponent,
    AddTodoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
