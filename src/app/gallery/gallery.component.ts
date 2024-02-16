import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl:'./gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: { path: string; description: string }[] = [
    { path: 'assets/image1.jpg', description: 'Descripción de la imagen 1' },
    { path: 'assets/image2.jpg', description: 'Descripción de la imagen 2' },
    { path: 'assets/image3.jpg', description: 'Descripción de la imagen 3' },
    // Agrega más imágenes según sea necesario
  ];
}
