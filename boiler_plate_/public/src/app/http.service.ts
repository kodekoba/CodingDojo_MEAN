import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { }
  getParents(){
    return this._http.get("/parents");
  }
  getParent(parent_id){ //can get all children of one parent through this route
    return this._http.get("/parents/" + parent_id);
  }
  addParent(newParent){
    return this._http.post("/parents/new", newParent);
  }
  addChild(parent_id, newChild){
    return this._http.put("/childs/new/" + parent_id, newChild);
  }
  editParent(parent_id, editedParent){
    return this._http.put("/parents/edit/" + parent_id, editedParent);
  }
  //edit child route ?
  deleteParent(parent_id){
    return this._http.delete("/parents/remove/" + parent_id);
  }
  deleteChild(parent_id, child_id){
    return this._http.get("/childs/remove/" + parent_id +"/"+ child_id);
  }
  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }
}
