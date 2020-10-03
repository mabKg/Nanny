import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';

import { NannyComponent } from './nanny.component';
import { NannyListComponent } from './nanny-list/nanny-list.component';
import { NannyListItemComponent } from './nanny-list-item/nanny-list-item.component';
import { NannyService } from './shared/nanny.service';
import { NannyDetailComponent } from './nanny-detail/nanny-detail.component';
import { UppercasePipe } from '../common/header/pipes/uppercase.pipe';
const routes: Routes = [
  { path: 'nanny',
component: NannyComponent,
children: [
  { path: '', component: NannyListComponent },
  { path: ':nannyId', component: NannyDetailComponent}
]}
]

@NgModule({
  declarations: [
    NannyComponent,
    NannyListComponent,
    NannyListItemComponent,
    NannyDetailComponent,
    UppercasePipe,
  ],
  imports: [
    CommonModule,HttpClientModule,NgPipesModule,
    RouterModule.forChild(routes)
  ],
  providers: [NannyService]
})

export class NannyModule {}
