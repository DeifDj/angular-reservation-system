import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventReservationService } from '../services/event-reservation.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private reservationService: EventReservationService) {}

  onSubmit() {
    // Lógica de inicio de sesión
    this.reservationService.loginUser(this.user).subscribe(
      response => {
        // Lógica después de la autenticación exitosa
        console.log('Inicio de sesión exitoso:', response);
        this.router.navigate(['/Home']); // Redireccionar al usuario a la ruta /Home
      },
      error => {
        console.error('Error al iniciar sesión:', error);
        // Aquí puedes manejar el error y mostrar un mensaje al usuario
      }
    );
  }
}
