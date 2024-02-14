import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../reservation/reservation.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DateFormatPipe } from '../date-format.pipe';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'],
  providers: [DateFormatPipe]
})
export class ReservationListComponent implements OnInit {
  eventName: string = '';
  eventDate: Date = new Date();
  reservations: Reservation[] = [];
  reservations$!: Observable<Reservation[]>;
  showReservationsFlag: boolean = false;
  location: any;

  constructor(private reservationService: ReservationService) {}

  createReservation(): void {
    if (this.eventName && this.eventDate) {
      const newReservation: Reservation = {
        id: this.reservations.length + 1,
        eventName: this.eventName,
        date: new Date(this.eventDate),
        location: '',
        nombre: 'Nombre', // Ajuste el valor según su lógica
        fecha: new Date()
      };

      this.reservationService.saveReservation(newReservation);
      this.initializeReservations();
    }
  }

  deleteAllReservations(): void {
    this.reservationService.deleteAllReservations();
    this.initializeReservations();
  }

  showReservations(): void {
    this.showReservationsFlag = true;
  }

  initializeReservations(): void {
    this.reservations = this.reservationService.getReservations();
  }

  simulateReservationData(): Reservation[] {
    return [
      {
        id: 1,
        eventName: 'Evento 1',
        date: new Date(),
        location: 'Lugar 1',
        nombre: 'Nombre 1',
        fecha: new Date()
      },
      {
        id: 2,
        eventName: 'Evento 2',
        date: new Date(),
        location: 'Lugar 2',
        nombre: 'Nombre 2',
        fecha: new Date()
      },
      {
        id: 3,
        eventName: 'Evento 3',
        date: new Date(),
        location: 'Lugar 3',
        nombre: 'Nombre 3',
        fecha: new Date()
      }
    ];
  }

  ngOnInit() {
    this.initializeReservations();
    this.reservations$ = new Observable<Reservation[]>(observer => {
      const reservacionesArray: Reservation[] = this.simulateReservationData();

      observer.next(reservacionesArray);
      observer.complete();
    }).pipe(
      tap(reservas => console.log('Lista de reservaciones:', reservas))
    );
  }
}
