import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReservationComponent } from './reservation/reservation.component';
import { GallleryComponent } from './galllery/galllery.component';
import { DateFormatPipe } from './date-format.pipe';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ReservationListComponent,
    LogInComponent,
    AboutUsComponent,
    NavBarComponent,
    NavigationComponent,
    ReservationComponent,
    GallleryComponent,
    DateFormatPipe,
    
  ],
  imports: [
    ReactiveFormsModule,
    MatSlideToggleModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'reservations', component: ReservationListComponent },
      { path: 'log-in', component: LogInComponent },

    
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
