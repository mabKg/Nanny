import { Component, OnInit } from '@angular/core';
import { NannyService } from '../shared/nanny.service';
import { Nanny } from '../shared/nanny.model';
@Component({
  selector: 'app-nanny-list',
  templateUrl: './nanny-list.component.html',
  styleUrls: ['./nanny-list.component.css']
})
export class NannyListComponent implements OnInit {

  nannyList: Nanny[] = [];

  constructor(private nannyService: NannyService) { }

  ngOnInit() {
    const nannyObservable = this.nannyService.getNanny();

    nannyObservable.subscribe(
      (nanny: Nanny[]) => {
this.nannyList = nanny;

      },
      (err) => {

      },
      () => {

      });
  }

}
