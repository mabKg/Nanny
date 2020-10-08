
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service'; 
import { CamelizePipe } from 'ngx-pipes';
@NgModule({
  declarations: [
    MapComponent
],
exports: [
    MapComponent
],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBFAHs7e7ZSCisw5B_qOLoXt7PMQzgOFSM'
      })
  ],
  providers: [
    MapService,
    CamelizePipe
  ],
 
})
export class MapModule { }
