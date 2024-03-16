import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rs',
  templateUrl: './rs.component.html',
  styleUrls: ['./rs.component.css']
})
export class RsComponent implements OnInit {
  rsForm !: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rsForm = this.fb.group({
      codeDemande: ['', Validators.required],
      signatureAuthentification: [{ value: '', disabled: true }],
      typeOperation: ['', Validators.required],
      numeroReference: [{ value: '', disabled: true }],
      autoriteDouaniere: [{ value: '', disabled: true }],
      documentsAttaches: [''],
      designationDemandeur: ['', Validators.required],
      codeDemandeur: ['', Validators.required],
      applicantType: ['', Validators.required],
      legalRepresentativeId: ['', Validators.required],
      dateExpiration: [''],
      bureauDouaneRattachement: [{ value: '', disabled: true }],
      identificationMarchandises: [{ value: '', disabled: true }],
      interdictionsRestrictions: [''],
      remarquesGenerales: [''],
      informationsComplementaires: [''],
      paysOrigineProvenance: ['', Validators.required],
      nationalite: ['', Validators.required],
      declarationPrecedente: [''],
      motif: [''],
      echancierPaiements: [{ value: '', disabled: true }],
      numeroDiptyque: ['']
    });

    if (this.rsForm) {
      this.rsForm.get('applicantType')?.valueChanges.subscribe(value => {
        this.rsForm.get('legalRepresentativeId')?.setValue('');
        this.rsForm.get('legalRepresentativeId')?.updateValueAndValidity();
      });
    }
  }

  onSubmit() {
    if (this.rsForm && this.rsForm.valid) {
      console.log('Formulaire soumis:', this.rsForm.value);
    } else {
      console.log('Formulaire non valide');
    }
  }

  getPlaceholder(): string {
    if (this.rsForm) {
      const applicantType = this.rsForm.get('applicantType')?.value;
      if (applicantType === 'individual') {
        return 'Entrez le numéro de CIN ou de passeport';
      } else if (applicantType === 'company') {
        return 'Entrez le numéro d\'identification de la société';
      }
    }
    return 'Sélectionnez le type de demandeur';
  }
}