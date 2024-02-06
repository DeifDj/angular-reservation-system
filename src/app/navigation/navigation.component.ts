

import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']  // Puedes agregar estilos aquí si es necesario
})
export class NavigationComponent {
  navigateTo(route: string): void {
    // Agrega lógica de navegación aquí si es necesario
    window.location.href = route;
  }
}