import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ReservationListComponent,
    LogInComponent,
    AboutUsComponent,
    NavBarComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'reservation', component: ReservationListComponent },
    
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
