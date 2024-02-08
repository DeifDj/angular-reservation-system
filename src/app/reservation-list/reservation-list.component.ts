import { Component } from '@angular/core';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  eventName: string = '';
  eventDate: string = '';
  reservations: any[] = [];

  constructor(private reservationService: ReservationService) {
    this.reservations = this.reservationService.getReservations();
  }

  createReservation(): void {
    if (this.eventName && this.eventDate) {
      const newReservation = {
        eventName: this.eventName,
        eventDate: this.eventDate
      };

      this.reservationService.saveReservation(newReservation);
      this.reservations = this.reservationService.getReservations();

      // Restablecer los campos del formulario después de guardar
      this.eventName = '';
      this.eventDate = '';
    }
  }
}