
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user = {
    username: '',
    password: '',
    // Agrega aquí cualquier otro campo que necesites para el registro
  };

  constructor(private router: Router, private registrationService: RegistrationService) {}

  onSubmit() {
    this.registrationService.registerUser(this.user).subscribe(
      (response) => {
        console.log('Registro exitoso:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }
}
