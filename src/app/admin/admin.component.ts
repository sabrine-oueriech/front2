import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'})

export class AdminComponent {
  constructor(private router: Router) {}
  logout() {
    // Redirige vers la page "Home"
    this.router.navigate(['/home']);
  }

ajoutbureau() {
  // Redirige vers la page "Home"
  this.router.navigate(['/ajoutbureau']);
}}
