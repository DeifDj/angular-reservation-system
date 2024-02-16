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

  registrationMode = false; // Variable para controlar si mostrar el formulario de registro

  constructor(private router: Router, private reservationService: EventReservationService) {}

  toggleRegistrationMode() {
    this.registrationMode = !this.registrationMode;
  }

  onSubmit() {
    if (this.registrationMode) {
      // Lógica para manejar el formulario de registro
      this.reservationService.registerUser(this.user).subscribe(
        (response) => {
          console.log('Registro exitoso:', response);
          // Puedes redirigir al usuario a la página que prefieras después del registro
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
        }
      );
    } else {
      // Lógica para manejar el formulario de inicio de sesión
      this.reservationService.loginUser(this.user).subscribe(
        (response) => {
          console.log('Inicio de sesión exitoso:', response);
          // Puedes redirigir al usuario a la página que prefieras después del inicio de sesión
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
        }
      );
    }
  }
  getSomeData(): string {
    // Tu lógica para obtener datos
    return 'Some data from LogInComponent';
  }
}
