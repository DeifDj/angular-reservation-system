import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ServicioReservaciones } from './services/reservation.service';

interface ReservacionesIndexSignature {
  [key: string]: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServicioReservaciones],
})
export class AppComponent implements OnInit {
  title = 'angular-reservation-system';
  packageJsonPath: string = 'path/to/package.json';
  imagePath: string = 'path/to/image.jpg';
  reservaciones: ReservacionesIndexSignature = {};

  constructor(private router: Router, private servicioReservaciones: ServicioReservaciones) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBackgroundClass();
      }
    });

    // Hacemos la primera solicitud al servidor al inicializar el componente
    this.obtenerReservaciones();
  }

  private obtenerReservaciones() {
    this.servicioReservaciones.obtenerReservaciones().subscribe(
      (data) => {
        this.reservaciones = data;
      },
      (error) => {
        console.error('Error al obtener las reservaciones', error);
      }
    );
  }

  private updateBackgroundClass() {
    const currentRoute = this.router.url;

    if (currentRoute.includes('/home')) {
      this.setBodyClass('home-background');
    } else if (currentRoute.includes('/reservation')) {
      this.setBodyClass('reservation-background');
    } else if (currentRoute.includes('/login')) {
      this.setBodyClass('login-background');
    } else if (currentRoute.includes('/gallery')) {
      this.setBodyClass('gallery-background');
    }
  }

  private setBodyClass(className: string) {
    document.body.className = className;
  }
}
