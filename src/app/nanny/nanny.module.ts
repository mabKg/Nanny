import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';
import { MapModule } from '../common/map/map.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NannyComponent } from './nanny.component';
import { NannyListComponent } from './nanny-list/nanny-list.component';
import { NannyListItemComponent } from './nanny-list-item/nanny-list-item.component';
import { NannyService } from './shared/nanny.service';
import { NannyDetailComponent } from './nanny-detail/nanny-detail.component';
import { NannyDetailBookingComponent } from './nanny-detail/nanny-detail-booking/nanny-detail-booking.component';
import { NannySearchComponent } from './nanny-search/nanny-search.component';

import { UppercasePipe } from '../common/header/pipes/uppercase.pipe';
import { HelperService } from '../common/service/helper.service';
import { BookingService } from '../booking/booking.service';
import { AuthGuard } from '../auth/shared/auth.guard';
import { NannyCreateComponent } from './nanny-create/nanny-create.component';


const routes: Routes = [
  { path: 'nanny',
component: NannyComponent,
children: [
  { path: '', component: NannyListComponent },
  { path: 'new', component: NannyCreateComponent},
  { path: ':nannyId', component: NannyDetailComponent, canActivate: [AuthGuard]},
  { path: ':city/nanny', component: NannySearchComponent}
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
    NannySearchComponent,
    NannyCreateComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgPipesModule,
    MapModule,
    Daterangepicker,
    FormsModule,
     ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    NannyService,
    HelperService,
    BookingService
  ]
})

export class NannyModule {}
