import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NannyModule } from './nanny/nanny.module';
import { AuthModule } from './auth/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';

import { SearchNannyComponent } from './common/header/search-nanny/search-nanny.component';




const routes: Routes = [
  {path: '', redirectTo: '/nanny', pathMatch: 'full'},
  {path: 'search', component: SearchNannyComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    SearchNannyComponent,
  
   
   ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NannyModule,
    AuthModule,
    NgbModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
