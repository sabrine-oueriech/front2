import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';




@Component({
  selector: 'app-autori2',
  templateUrl: './autori2.component.html',
  styleUrls: ['./autori2.component.css']
})
export class Autori2Component implements OnInit {
  siteKey: string = 'your-site-key-here';  // Utilisez votre clé de site réelle pour reCAPTCHA

  myForm = new FormGroup({
    personalInformation: new FormGroup({
      name: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      nationality: new FormControl('tunisienne', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      passport: new FormControl('', Validators.required),
      cin: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
      gov: new FormControl('tunis', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
    }),
    vehicleInformation: new FormGroup({
      registration: new FormControl('', Validators.required),
      chassis: new FormControl('', Validators.required),
      energy: new FormControl('essence', Validators.required),
      brand: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      firstCirculationDate: new FormControl('', Validators.required),
    }),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validatePassportFormat(control: AbstractControl): ValidationErrors | null {
    const isValidPassport = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/i.test(control.value);
    return isValidPassport ? null : { invalidPassport: true };
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log('Form submitted!', this.myForm.value);
      // Here, you would typically send this data to a server or use it in some other way
    } else {
      console.error('The form is not valid');
    }
  }

  goToDisplayData(): void {
    this.router.navigate(['/display-data']); // Navigate to the 'display-data' route
  }
}
