import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childVariable:any;
  @Output() childOutputVariable = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendBackToParent(){
    this.childOutputVariable.emit(true);
  }
}
