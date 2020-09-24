import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NannyModule } from './nanny/nanny.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';

import { NannyComponent } from './nanny/nanny.component';

const routes: Routes = [
  {path: '', redirectTo: '/nanny', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,


  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NannyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
