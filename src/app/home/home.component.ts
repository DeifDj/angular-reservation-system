import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  empresa: any;

  constructor(private empresaService: EmpresaService) {}

  ngOnInit() {
    this.empresa = this.empresaService.getInformacionEmpresa();
  }
  mostrarInformacionEmpresa() {
    // Lógica para mostrar información adicional si es necesario.
  }
}
