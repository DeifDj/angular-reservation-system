import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  title = 'angular-reservation-system';
  packageJsonPath: string = 'path/to/package.json';
  imagePath: string = 'path/to/image.jpg';

  
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBackgroundClass();
      }
    });
  }

  private updateBackgroundClass() {
    const body = document.getElementsByTagName('body')[0];
    const currentRoute = this.router.url;
    body.className = ''; // Limpiamos las clases anteriores

    if (currentRoute.includes('/home')) {
      body.classList.add('home-background');
    } else if (currentRoute.includes('/reservation')) {
      body.classList.add('reservation-background');
    } else if (currentRoute.includes('/login')) {
      body.classList.add('login-background');
    } else if (currentRoute.includes('/gallery')) {
      body.classList.add('gallery-background');
    }
  }
}
