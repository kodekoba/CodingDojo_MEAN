import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cakes = [];
  reviews = [];
  thisCake: any;
  showThisCake: boolean;
  newCake: any;
  newReview: any;
  avgRating: number;

  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.getCakesFromService();
    this.showThisCake = false;
    this.newCake = {name: "", image: ""};
    this.newReview = {cake_id: "", rating: null, comment: ""};
    this.thisCake = {};
    this.avgRating = null;
  }
  getCakesFromService(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("Got all the cake data!", data);
      this.cakes = data["data"];
    });
  }
  getThisCakeFromService(cake){
    this.showThisCake = true;
    this.thisCake = cake;
    this.reviews = this.thisCake.reviews;
    this.getReviewsFromService(cake);
  }
  onSubmitCake(){
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("Got cake data from post back", data);
      this.newCake = {name: "", image: ""};
      this.getCakesFromService();
    });
  }
  getReviewsFromService(thisCake){
    let observable = this._httpService.getReviews(thisCake);
    observable.subscribe(data => {
      console.log("Got all the review data!", data);
      this.reviews = data["data"][0].reviews;
      //console.log(this.reviews);
      var totalRating = 0;
      for (var i = 0; i < this.reviews.length; i++){
        totalRating += this.reviews[i].rating;
      }
      this.avgRating = totalRating / this.reviews.length; 
    });
  }
  onSubmitReview(cake){
    this.newReview.cake_id = cake._id;
    let observable = this._httpService.addReview(this.newReview);
    observable.subscribe(data => {
      console.log("Got review data from post back", data);
      this.getReviewsFromService(cake);
      this.newReview = {cake_id: "", rating: null, comment: ""};
    });
  }
}
