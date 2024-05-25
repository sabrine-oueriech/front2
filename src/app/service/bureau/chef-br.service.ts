import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DemandeVerify } from '../../models/demandeverify';
import { Demandee } from '../../models/demandee';
import { User } from '../../models/user';
import { TokenStorageService } from '../token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ChefBRService {

  private baseUrl = 'http://localhost:8080/api/chefbr';

 
  constructor(private http: HttpClient, private  tokenStorageService :TokenStorageService) { }
  private getHeaders(): HttpHeaders {
    const token = this.tokenStorageService.getToken();

    if (!token) {
      return new HttpHeaders();
    }

    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getAllDemandesByUserValidate(): Observable<Demandee[]> {
    return this.http.get<Demandee[]>(`${this.baseUrl}/dems`);
  }

  getAllDemandesVerifier(): Observable<Demandee[]> {
    return this.http.get<Demandee[]>(`${this.baseUrl}/demsverifier`);
  }

  validerDemande(demandeVerifieDto: any): Observable<Demandee> {
    return this.http.post<Demandee>(`${this.baseUrl}/validdemande`, demandeVerifieDto);
  
  }
  getProfile(): Observable<User> {
    const headers = this.getHeaders();
    return this.http.get<User>(`${this.baseUrl}/profile`,{ headers });
  }
  
}
