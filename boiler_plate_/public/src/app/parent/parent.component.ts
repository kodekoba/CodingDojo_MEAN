import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  listOfParents: any;
  selectedParent: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getParentsList();
  }
  getParentsList(){
    let observable = this._httpService.getParents();
    observable.subscribe(data => {
      // this.listOfParents = data['data']; // regular retrieval
      this.listOfParents = data['data'].sort(this._httpService.dynamicSort("name")); //sort by name
    })
  }
  onShow(parent) {
    this._router.navigate(['/p/details/' + parent._id ])
  }
  onEdit(parent) {
    this._router.navigate(['/p/edit/' + parent._id ])
  }
  onDelete(parent) {
    let observable = this._httpService.deleteParent(parent._id);
    observable.subscribe(data => {
      this.getParentsList();
    })
  }
  onSelect(parent){
    this.selectedParent = parent;
  }
  ReceivedChildMessage(event){
    if(event == true){
      this.selectedParent = null;
    }
  }
}
