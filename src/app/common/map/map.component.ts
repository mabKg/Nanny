import { Component, Input, OnInit } from '@angular/core';
import { MapService } from './map.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
@Input() location: string;;

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

//   mapReadyHandler() {
// this.mapService.geocodeLocation(this.location).subscribe(
//   (coordinates) =>
//   {
//     this.lat = coordinates.lat;
//     this.lng = coordinates.lng;
//   }
// )
//   }
}
