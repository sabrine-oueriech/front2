import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bureaudto } from '../../models/bureaudto';
import { Bureau } from '../../models/bureau';
import {User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class BureauService {
  private apiUrl = 'http://localhost:8080/api/admin';
  private baseUrl = 'http://localhost:8080/api/user'  ;
  private baseeUrl = 'http://localhost:8080/api/test'  
  tokenStorageService: any;
 
  constructor(private http: HttpClient) {  

  }
   

  // Obtenir tous les bureaux
  getAllBureaux(): Observable<Bureau[]> {
    return this.http.get<Bureau[]>(`${this.apiUrl}/bureaus`);
  } 
  createEmployer(user:any): Observable<any> {
    // const headers = this.getHeaders();
    return this.http.post(`${this.apiUrl}/createEmp`, user);
  }
  getUsersBySpecificRoles(): Observable<any> {
    return this.http.get(`${this.baseeUrl}/roles`);
  }
 // Dans BureauService
addBureau(bureau: Bureaudto): Observable<Bureau> {
  return this.http.post<Bureau>(`${this.apiUrl}/bureau`, bureau);
}


  // Modifier un bureau existant
  updateBureau(id: number, bureau: Bureaudto): Observable<Bureaudto> {
    return this.http.put<Bureaudto>(`${this.apiUrl}/${id}`, bureau);
  }

  // Supprimer un bureau
  deleteBureau(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
