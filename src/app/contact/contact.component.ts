import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  registrationMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required], // Simplified form control initialization
      email: ['', [Validators.required, Validators.email]],
      phone: [''], // No validators required as per your setup
      message: ['', Validators.required],
      sendCopy: [false] // Default value set to false
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.createContact(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.registrationMessage = 'Contact enregistré avec succès !';
          this.resetFormData();
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
    } else {
      console.error('Form is not valid');
    }
  }

  private resetFormData(): void {
    this.contactForm.reset();
  }
}
