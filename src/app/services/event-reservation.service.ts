import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventReservationService {
  private apiUrl = 'URL_DEL_BACKEND'; // Reemplaza con la URL de tu servidor

  constructor(private http: HttpClient) {}

  createReservation(reservationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservations`, reservationData);
  }

  getReservations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reservations`);
  }

  deleteReservation(reservationId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reservations/${reservationId}`);
  }

  editReservation(reservationId: number, newData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/reservations/${reservationId}`, newData);
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, userData);
    // ^ Ajustado para indicar que se espera una respuesta del tipo 'any'
  }
  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
}
