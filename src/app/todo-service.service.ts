import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoServiceService {

  private getUrl = "http://localhost:3000/api/todoModels/";
  constructor(private http: Http) { }

  getTodoList() {
      let url = `${this.getUrl}`
      return this.http.get(url)
        .map((res: Response) => res.json())
        .catch(this.handleError);
    }

    getTodoSingle(id: number) {
      if (id) {
        let url = `${this.getUrl}${id}`;
        console.log(url);
        return this.http.get(url)
          .map((res: Response) => res.json())
          .catch(this.handleError);
      }
   }

   addTodoSingle(body:any){
      console.log(body);
      let url = `${this.getUrl}`
      return this.http.post(url, body)
   }
   
   deleteTodoSingle(id:number){
    if (id) {
      let url = `${this.getUrl}${id}`;
      console.log(url);
      return this.http.delete(url);
      }
   }

   updateTodoSingle(id:number, body:any){
      console.log(body);
      let url = `${this.getUrl}${id}`;
      return this.http.put(url, body).
        catch(this.handleError);
   }

    private handleError(error: Response | any) {
      // In a real world app, you might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }
}
    
