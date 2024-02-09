import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservacion } from '../reservation/reservation.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  eventName: string = '';
  eventDate: string = '';
  reservations: Reservacion[] = [];
  reservations$!: Observable<Reservacion[]>;
  showReservationsFlag: boolean = false;

  constructor(private reservationService: ReservationService) {}

  createReservation(): void {
    if (this.eventName && this.eventDate) {
      const newReservation: Reservacion = {
        id: this.reservations.length + 1,
        nombre: this.eventName,
        fecha: new Date(this.eventDate)
      };

      this.reservationService.saveReservation(newReservation);
      this.initializeReservations();
    }
  }

  showReservations(): void {
    this.showReservationsFlag = true;
  }

  initializeReservations(): void {
    this.reservations = this.reservationService.getReservations();
  }

  simulateReservationData(): Reservacion[] {
    return [
      { id: 1, nombre: 'Reserva 1', fecha: new Date() },
      { id: 2, nombre: 'Reserva 2', fecha: new Date() },
      { id: 3, nombre: 'Reserva 3', fecha: new Date() }
    ];
  }

  ngOnInit() {
    this.initializeReservations();
    this.reservations$ = new Observable<Reservacion[]>(observer => {
      const reservacionesArray: Reservacion[] = this.simulateReservationData();

      observer.next(reservacionesArray);
      observer.complete();
    }).pipe(
      tap(reservas => console.log('Lista de reservaciones:', reservas))
    );
  }
}