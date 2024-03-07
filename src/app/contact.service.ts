import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  createContact(contactData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/createcontact`, contactData); // Utilisez "/createcontact" au lieu de "/contact"
  } 
}
