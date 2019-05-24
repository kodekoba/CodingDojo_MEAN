import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editingParent: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.editingParent = {name: "", image: "", childs: []}
    this.getSpecificParent();

  }
  getSpecificParent(){
    let observable = this._httpService.getParent(this._route.snapshot.params.id);
    observable.subscribe(data => {
      this.editingParent = data['data'][0];
    })
  }
  onSubmit(){
    let observable = this._httpService.editParent(this._route.snapshot.params.id, this.editingParent);
    observable.subscribe(data =>{
      this.editingParent = data['data'][0];
    })
  }
}
