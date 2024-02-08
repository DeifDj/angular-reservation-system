import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { GallleryComponent } from './galllery/galllery.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reservation', component: ReservationListComponent },
  { path: 'login', component: LogInComponent },
  { path: 'gallery', component: GallleryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/logIn', pathMatch: 'full' }, // Esta línea configura la ruta inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }