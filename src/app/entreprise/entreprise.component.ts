// entreprise.component.ts
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css'] // Assurez-vous que le chemin est correct
})
export class EntrepriseComponent {
  // Définissez les propriétés pour le binding avec ngModel
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onLogin() {
    // Utilisez les propriétés email et password directement sans les passer en tant qu'arguments
    this.userService.loginUser({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        // Redirigez ici selon la logique de votre application
        this.router.navigate(['/cheminAprèsConnexion']); // Adaptez selon votre besoin
      },
      error: (error) => {
        console.error('Login error', error);
      }
    });
  }
}
