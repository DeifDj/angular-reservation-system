import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private informacionEmpresa: any;  // Puedes cambiar el tipo según la estructura de tu información.

  constructor() {}

  getInformacionEmpresa() {
    return this.informacionEmpresa;
  }

  setInformacionEmpresa(informacion: any) {
    this.informacionEmpresa = informacion;
  }
}
