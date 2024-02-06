
import { Component } from '@angular/core';

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

  onSubmit() {
    // Aquí puedes implementar la lógica de inicio de sesión
    console.log('Usuario:', this.user.username);
    console.log('Contraseña:', this.user.password);

    // Puedes realizar una solicitud HTTP para autenticar al usuario aquí
  }
}
