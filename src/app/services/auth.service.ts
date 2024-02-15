
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtHelper = new JwtHelperService();

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }

  // Obtener el token del almacenamiento local
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Almacenar el token en el almacenamiento local
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Eliminar el token del almacenamiento local
  removeToken(): void {
    localStorage.removeItem('token');
  }
}
