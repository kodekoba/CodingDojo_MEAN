import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getCakes(){
    return this._http.get("/cakes");
  }
  showCake(){
    return this._http.get("/cakes/show");
  }
  addCake(newCake){
    return this._http.post("/cakes/new", newCake);
  }
  getReviews(thisCake){
    console.log(thisCake);
    return this._http.get("/reviews/" + thisCake._id);
  }
  addReview(newReview){
    return this._http.post("/reviews/new", newReview);
  }
}
