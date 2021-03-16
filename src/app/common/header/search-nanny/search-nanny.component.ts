import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-nanny',
  templateUrl: './search-nanny.component.html',
  styleUrls: ['./search-nanny.component.css']
})
export class SearchNannyComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  search(city: string) {
    city ? this.router.navigate([`/nanny/${city}/nanny`]) : this.router.navigate(['/nanny']);
  }
}
