import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NannyModule } from './nanny/nanny.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';

import { NannyComponent } from './nanny/nanny.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path: '', redirectTo: '/nanny', pathMatch: 'full'},
  {path: 'test', component: TestComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
   


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
