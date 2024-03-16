
import { Component } from '@angular/core';
import { UserService } from '../user.service'; // Assurez-vous que le chemin d'import est correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  // Méthode pour gérer la soumission du formulaire de connexion
  onLogin() {
    this.userService.loginUser({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        // Vous pouvez ici enregistrer le jeton JWT retourné par votre serveur si nécessaire
        // Puis redirigez l'utilisateur vers une page après connexion
        this.router.navigate(['/chemin-apres-connexion']);
      },
      error: (error) => {
        console.error('Login error', error);
        // Gérez les erreurs de connexion ici, par exemple en affichant un message
      }
    });
  }
}
