import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  showScanner = false; // Used to show/hide the QR scanner

  constructor() { }

  toggleScanner(): void {
    this.showScanner = !this.showScanner;
  }

  handleQrCodeResult(resultString: string): void {
    console.log('Result:', resultString);
    // Handle the QR code result. Perhaps autofill some form fields?
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form is valid', this.loginForm.value);
      // Proceed with your login logic
    } else {
      console.error('Form is not valid');
    }
  }
}
