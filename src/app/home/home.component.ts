import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import * as bootstrap from 'bootstrap'; 


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
  registrationMessage: string = '';

  loginData = {
    email: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.registerUser(this.formData).subscribe({
      next: (response) => {
        console.log('Success:', response);
        this.registrationMessage = 'Inscription réussie !';
        this.resetFormData();
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  login(): void {
    this.userService.loginUser(this.loginData).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        localStorage.setItem('authToken', response.token); // Exemple de gestion de token
        // Effectuez ici d'autres actions post-connexion, comme la redirection
      },
      error: (error) => {
        console.error('Login error:', error);
      }
    });
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
}
