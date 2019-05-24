import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newParent: any;
  newChild: any;
  errorBoolean: boolean; //false
  errorMessage: "";
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newParent = { name: "", image: "", childs: [] } 
    this.newChild = { rating: null, comment: ""}
  }
  onSubmit() {
    //
    if(this.newParent.name.length < 3) {
      this.errorBoolean = true;
    } else {
      // //can create a Parent with a "child" attached during initialization using the line below 
      // this.newParent.childs.push(this.newChild);
      let observable = this._httpService.addParent(this.newParent);
      observable.subscribe(data => {
        console.log(data);
        //display error messages to html //Change error messages in the CONTROLLERS as needed
        if (data['errorMsg']) {
          this.errorMessage = data['errorMsg'];
        } else {
          this._router.navigate(['/p']);
        }
      })
    }
  }

  // //sample of regular observable with routing after data comes back (no validation)
  // onSubmit() {
  //   let observable = this._httpService.addNew(this.newObject);
  //   observable.subscribe(data => {
  //     console.log(data);
  //     this._router.navigate(['/p'])
  //   })
  // }
  // // front-end validation (you can add more fields to check with else if)
  // onSubmit() {
  //   if (this.newObject.title.length < 3) {
  //     this.errorBoolean = true;
  //   } else {
  //     //this will create the object with an initial review
  //     this.newObject.reviews.push(this.newReview);
  //     let observable = this._httpService.addNew(this.newObject);
  //     observable.subscribe(data => {
  //       console.log(data);
  //       this._router.navigate(['/p'])
  //     })
  //   }
  // }
  // //sample of detecting errorMsg on mainController and setting errorMessage variable here to be that message for front-end rendering;
  // onSubmit() {
  //     //this will create the object with an initial review
  //     this.newObject.reviews.push(this.newReview);
  //     let observable = this._httpService.addNew(this.newObject);
  //     observable.subscribe(data => {
  //       console.log(data);
  //       if (data['errorMsg']) {
  //         this.errorMessage = data['errorMsg']
  //       } else {
  //         this._router.navigate(['/p'])
  //       }
  //     })
  //   }

  // }

}
