import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InspectateurService } from '../service/bureau/inspectateur.service';
import { Demandee } from '../models/demandee';
import { ToastrService } from 'ngx-toastr'; // Importez ToastrService
import { DocumentUploadService } from '../service/document-upload.service';
import { DemandeVerify } from '../models/demandeverify';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  demandes: Demandee | null = null;
  id = this.activeroute.snapshot.params['id']; 
  router: any;
  constructor(
    private activeroute: ActivatedRoute,
    private demandeService: InspectateurService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private documentUploadService: DocumentUploadService,
    private inspecteurService: InspectateurService,
  ) {}

  ngOnInit(): void {
  console.log('idffffffffff',this.id);
      this.loadDemande();
      this.delete(this.id);
    
  }

  loadDemande(): void {
    this.demandeService.getDemandeById(this.id).subscribe({
      next: (data:any) => {
        this.demandes = data;
        console.log('demandebyid',this.demandes);
      },
      error: (error) => {
        console.error('Error fetching the demande:', error);
        this.toastr.error('Une erreur est survenue lors de la récupération de la demande.'); 
      }
    });
  }
  
  
  delete(id: number): void {
   
    this.inspecteurService. deletes(id).subscribe({
      next: (response) => {
        console.log('Demande deleted successfully');
        this.toastr.success('le demande supprimer avec  succès!', 'Succès');
        this.router.navigate(['/inspecteur']); 
      },
      error: (error) => {
        console.error('Error deleting demande:', error.message);
        // Display user-friendly error message
      }
    });
    
      
  }
  verifyDemand(id: number, statue: String, archive: boolean): void {
    if (id === -1) {
      console.error('ID invalide, opération annulée');
      return;
    }
    const demandeVerifieDto : DemandeVerify = new DemandeVerify (statue, id,  archive );
    this.inspecteurService.verifyDemand(demandeVerifieDto).subscribe({
      next: (response) => {
        console.log('Demande vérifiée avec succès:', response);
        this.router.navigateByUrl("/inspecteur");
      },
      error: (error) => {
        console.error('Erreur lors de la vérification:', error);
      }
    });
  }
  
}
