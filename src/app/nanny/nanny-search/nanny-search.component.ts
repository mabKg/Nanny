import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nanny } from '../shared/nanny.model';
import { NannyService } from '../shared/nanny.service';

import { HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-nanny-search',
  templateUrl: './nanny-search.component.html',
  styleUrls: ['./nanny-search.component.css']
})
export class NannySearchComponent implements OnInit {

  city: string;
nanny: Nanny[] = [];
errors: any[] = [];
  constructor( private route: ActivatedRoute, private nannyService: NannyService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.city = params['city'];
      this.gatNanny();
    })
  }

  gatNanny(){
    this.errors = [];
    this.nanny = [];
    
    this.nannyService.getNannyByCity(this.city).subscribe(
      (nannies: Nanny[]) => {
      this.nanny = nannies;
      },
      (errorResponse: HttpErrorResponse) => {
       this.errors = errorResponse.error.errors;
      }
    )
  }
}
