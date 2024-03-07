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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required],
      sendCopy: [false]
    });
  }

  onSubmit(): void {
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
  }

  private resetFormData(): void {
    this.contactForm.reset();
  }
}
