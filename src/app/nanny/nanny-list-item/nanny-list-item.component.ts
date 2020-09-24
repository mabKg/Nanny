import { Component, OnInit, Input } from '@angular/core';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-nanny-list-item',
  templateUrl: './nanny-list-item.component.html',
  styleUrls: ['./nanny-list-item.component.css']
})
export class NannyListItemComponent implements OnInit {

@Input() currentNanny: any;
  constructor() { }

  ngOnInit() {

  }

}
