import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reservation', component: ReservationListComponent },
  { path: 'logIn', component: LogInComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }