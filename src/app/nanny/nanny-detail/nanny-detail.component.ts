import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NannyService } from '../shared/nanny.service';
import { Nanny } from '../shared/nanny.model';

@Component({
  selector: 'app-nanny-detail',
  templateUrl: './nanny-detail.component.html',
  styleUrls: ['./nanny-detail.component.css']
})
export class NannyDetailComponent implements OnInit {


nanny: Nanny;
  constructor(private route: ActivatedRoute, private nannyService: NannyService, ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
       this.getNanny(params['nannyId']);

      })
  }

  getNanny(nannyId: string) {
    this.nannyService.getNannyById(nannyId).subscribe(
      (nanny: Nanny) => {
this.nanny = nanny;
      }
    )
  }
}
