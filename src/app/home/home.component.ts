import * as bootstrap from 'bootstrap';
import * as QRCode from 'qrcode';
import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { Router } from '@angular/router'; // Importez le Router

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  qrCodeUrl!: string; // Ajoutez un point d'exclamation pour indiquer que qrCodeUrl sera initialisé plus tard
  registrationMessage: string = '';

  loginData = {
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) { } // Injectez le Router

  ngOnInit(): void {
    this.generateQRCode(); // Appel à la méthode de génération du QR Code au chargement du composant
  }

  async onSubmit(): Promise<void> {
    try {
      const response = await this.userService.registerUser(this.formData).toPromise();
      console.log('Success:', response);
      this.registrationMessage = 'Inscription réussie !';
      this.resetFormData();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async login(): Promise<void> {
    try {
      const response = await this.userService.loginUser(this.loginData).toPromise();
      console.log('Login successful:', response);
      localStorage.setItem('authToken', response.token); // Exemple de gestion de token
      // Redirigez vers le composant 'ChoixComponent' après la connexion réussie
      this.router.navigate(['/choix']);
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  openLoginModal(): void {
    this.toggleModal('offcanvasRight', true);
  }

  openRegisterModal(): void {
    this.toggleModal('exampleModal', false);
  }

  private resetFormData(): void {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  private toggleModal(elementId: string, isOffcanvas: boolean): void {
    const element = document.getElementById(elementId);
    if (element) {
      if (isOffcanvas) {
        const modal = new bootstrap.Offcanvas(element);
        modal.show();
      } else {
        const modal = new bootstrap.Modal(element);
        modal.show();
      }
    } else {
      console.error(`L'élément avec l'ID '${elementId}' n'a pas été trouvé.`);
    }
  }

  private async generateQRCode(): Promise<void> {
    const userId = 'uniqueUserId'; // Cet identifiant doit être obtenu après l'enregistrement de l'utilisateur
    try {
      this.qrCodeUrl = await QRCode.toDataURL(userId);
      this.registrationMessage = 'Inscription réussie !'; // Message à afficher après la génération du QR Code
    } catch (error) {
      console.error('Erreur lors de la génération du code QR :', error);
      this.registrationMessage = 'Échec de la génération du code QR.';
    }
  }
}