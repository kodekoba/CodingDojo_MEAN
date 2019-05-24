import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  newChild: any;
  shownParent: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newChild = { rating: null, comment: ""}
    this.shownParent = { name: "", image: "", childs:[{ rating: null, comment: ""}] }
    this.getShownParent();
  }
  getShownParent(){
    let observable = this._httpService.getParent(this._route.snapshot.params.id)
    observable.subscribe(data => {
      this.shownParent = data['data'];
      console.log(this.shownParent);
      //get avg rating
      var sum = 0;
      if (this.shownParent[0].childs.length > 0 ){
        for (var i = 0; i < this.shownParent[0].childs.length; i++){
          sum += this.shownParent[0].childs[i].rating;
        }
          this.shownParent.avg = sum / (this.shownParent[0].childs.length);
          this.shownParent.sortedchilds = this.shownParent[0].childs.sort(this._httpService.dynamicSort("-rating")) // sort by descending rating
      }
    })
  }
  onSubmit(){
    let observable = this._httpService.addChild(this._route.snapshot.params.id, this.newChild);
    observable.subscribe(data => {
      this.newChild = { rating: null, comment: ""};
      this.getShownParent();
    })
  }
  onDelete(child){
    let observable = this._httpService.deleteChild(this._route.snapshot.params.id, child._id)
    observable.subscribe(data=> {
      this.getShownParent();
    })
  }
}
