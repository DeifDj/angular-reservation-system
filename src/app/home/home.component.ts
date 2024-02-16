import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  empresa: any;
  title: string = 'Welcome to the Home Page';

  constructor(private empresaService: EmpresaService) {}

  ngOnInit() {
    this.empresa = this.empresaService.getInformacionEmpresa();
  }
  mostrarInformacionEmpresa() {
    // Lógica para mostrar información adicional si es necesario.
  }
  getSomeData(): string {
    // Tu lógica para obtener datos
    return 'Some data from HomeComponent';
  }
}
