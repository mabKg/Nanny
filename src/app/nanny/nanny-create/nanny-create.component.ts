import { Component, OnInit } from '@angular/core';
import { Nanny } from '../shared/nanny.model'
import { TYPES } from '../../common/type.constant';
@Component({
  selector: 'app-nanny-create',
  templateUrl: './nanny-create.component.html',
  styleUrls: ['./nanny-create.component.css']
})
export class NannyCreateComponent implements OnInit {

 
  newNanny : Nanny;
  
  constructor() { }

  ngOnInit() {
    this.newNanny = new Nanny();

  }

  createNanny() {
console.log(this.newNanny);
  }
  
}
