import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Demandee } from '../../models/demandee'; 
import { Bureau } from '../../models/bureau'; 
import { TokenStorageService } from '../token-storage.service';
import { DemandeVerify } from '../../models/demandeverify';

@Injectable({
  providedIn: 'root'
})
export class InspectateurService {
    private baseUrl = 'http://localhost:8080/api/inspectateur';
    private basseUrl = 'http://localhost:8080/api/chefbr';

   // private bureauUrl = 'http://localhost:8080/api/bureau'; 

    constructor(private http: HttpClient,private tokenStorageService: TokenStorageService) { }
   
    private getHeaders(): HttpHeaders {
      const token = this.tokenStorageService.getToken();
  
      if (!token) {
        return new HttpHeaders();
      }
  
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }
  
    getAllDemandes(): Observable<Demandee[]> {
      const headers = this.getHeaders();
        return this.http.get<Demandee[]>(`${this.baseUrl}/demandes`, { headers });
    }

    getDemandeById(id: number): Observable<Demandee> {
      const headers = this.getHeaders();
        return this.http.get<Demandee>(`${this.baseUrl}/demande/${id}`, { headers });
    }
    
   
// 
    
    updateDemande(id: number, demande: Demandee): Observable<Demandee> {
      const headers = this.getHeaders();
        return this.http.put<Demandee>(`${this.baseUrl}/demandes/${id}`, demande, { headers });
    }
    deletes(id: number): Observable<any> {
      const headers = this.getHeaders();
        return this.http.delete(`http://localhost:8080/api/user/dem/${id}`, { headers });
      }
    
   
    

      verifyDemand(demandeVerifieDto: DemandeVerify): Observable<any> {
        const headers = this.getHeaders();
        return this.http.post(`${this.baseUrl}/demverifie`, demandeVerifieDto, { headers });
    }
    

  

    getDemandesEnCours(): Observable<Demandee[]> {
      const headers = this.getHeaders();
        return this.http.get<Demandee[]>(`${this.baseUrl}/demandesencours`, { headers });
    }
    getDemandesverifier(): Observable<Demandee[]> {
      const headers = this.getHeaders();
        return this.http.get<Demandee[]>(`${this.basseUrl}/demsverifier`, { headers });
    }
}
