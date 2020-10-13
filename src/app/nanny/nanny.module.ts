import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';
import { MapModule } from '../common/map/map.module';
import { Daterangepicker } from 'ng2-daterangepicker';

import { NannyComponent } from './nanny.component';
import { NannyListComponent } from './nanny-list/nanny-list.component';
import { NannyListItemComponent } from './nanny-list-item/nanny-list-item.component';
import { NannyService } from './shared/nanny.service';
import { NannyDetailComponent } from './nanny-detail/nanny-detail.component';
import { UppercasePipe } from '../common/header/pipes/uppercase.pipe';

import { AuthGuard } from '../auth/shared/auth.guard';
import { NannyDetailBookingComponent } from './nanny-detail/nanny-detail-booking/nanny-detail-booking.component';

const routes: Routes = [
  { path: 'nanny',
component: NannyComponent,
children: [
  { path: '', component: NannyListComponent },
  { path: ':nannyId', component: NannyDetailComponent, canActivate: [AuthGuard]}
]}
]

@NgModule({
  declarations: [
    NannyComponent,
    NannyListComponent,
    NannyListItemComponent,
    NannyDetailComponent,
    UppercasePipe,
    NannyDetailBookingComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgPipesModule,
    MapModule,
    Daterangepicker,
    RouterModule.forChild(routes)
  ],
  providers: [NannyService]
})

export class NannyModule {}
