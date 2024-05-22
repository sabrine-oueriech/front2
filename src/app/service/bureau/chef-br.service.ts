import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DemandeVerify } from '../../models/demandeverify';
import { Demandee } from '../../models/demandee';

@Injectable({
  providedIn: 'root'
})
export class ChefBRService {

  private baseUrl = 'http://localhost:8080/api/chefbr';

  constructor(private http: HttpClient) { }

  getAllDemandesByUserValidate(): Observable<Demandee[]> {
    return this.http.get<Demandee[]>(`${this.baseUrl}/dems`);
  }

  getAllDemandesVerifier(): Observable<Demandee[]> {
    return this.http.get<Demandee[]>(`${this.baseUrl}/demsverifier`);
  }

  validerDemande(demandeVerifieDto: DemandeVerify): Observable<Demandee[]> {
    return this.http.post<Demandee[]>(`${this.baseUrl}/validdemande`, demandeVerifieDto);
  }

  
}
