import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getTask1();
  }

  getTasks(){
    let tempObservable = this._http.get("/tasks");
    tempObservable.subscribe(data => console.log("Success retrieving tasks!", data));
  }
  getTask1(){
    let tempObservable = this._http.get("/Go to the mall");
    tempObservable.subscribe(data => console.log("Success retrieving task!", data));
  }
}
