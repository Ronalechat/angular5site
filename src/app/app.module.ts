import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as $ from 'jquery';
import { map } from 'rxjs/operators';
import fontawesome from '@fortawesome/fontawesome';
import {faEnvelopeSquare} from '@fortawesome/fontawesome-free-solid';
import {faTwitterSquare} from '@fortawesome/fontawesome-free-brands';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { HeaderComponent } from './header/header.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavRightComponent } from './nav-right/nav-right.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];

fontawesome.library.add(faEnvelopeSquare, faTwitterSquare);


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    WorkComponent,
    HeaderComponent,
    NavFooterComponent,
    NavLeftComponent,
    NavRightComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
