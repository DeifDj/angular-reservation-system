import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioReservaciones {
  private storageKey = 'reservations';

  constructor() {}

  // Obtener todas las reservas desde el LocalStorage
  getReservations(): any[] {
    const storedReservations = localStorage.getItem(this.storageKey);
    return storedReservations ? JSON.parse(storedReservations) : [];
  }

  // Guardar una nueva reserva en el LocalStorage
  saveReservation(newReservation: any): void {
    const currentReservations = this.getReservations();
    currentReservations.push(newReservation);
    localStorage.setItem(this.storageKey, JSON.stringify(currentReservations));
  }

  // Eliminar todas las reservas del LocalStorage
  deleteAllReservations(): void {
    localStorage.removeItem(this.storageKey);
  }

  // Obtener reservaciones como un observable
  obtenerReservaciones(): Observable<any[]> {
    const reservations = this.getReservations();
    return of(reservations);
  }
}
