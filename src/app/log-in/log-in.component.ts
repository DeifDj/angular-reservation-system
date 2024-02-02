import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-In.component.html',
  styleUrls: ['./log-In.component.css']
})
export class LogInComponent {
  loginForm!: NgForm;
  ngOnInit() {
    this.loginForm = {} as NgForm;
  }
onSubmit() {
  console.log(this.loginForm.value);
}
  username!: String;
  password!: String;
  // Puedes añadir la lógica para iniciar sesión aquí
}