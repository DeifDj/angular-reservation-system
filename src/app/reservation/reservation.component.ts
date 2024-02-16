import { Component } from '@angular/core';
import { EventReservationService } from '../services/event-reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  constructor(private reservationService: EventReservationService) {}

  // Lógica para invocar las operaciones del servicio según sea necesario
  // ...

  // Ejemplo de cómo invocar la operación de eliminar reserva
  deleteReservation(reservationId: number): void {
    this.reservationService.deleteReservation(reservationId).subscribe(
      response => {
        // Lógica después de la eliminación exitosa
      },
      error => {
        console.error('Error al eliminar reserva:', error);
      }
    );
  }
  getSomeData(): string {
    
    return 'Some data from ReservationComponent';
  }
}
