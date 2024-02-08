import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
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
}