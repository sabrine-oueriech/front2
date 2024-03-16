import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importez votre composant Home
import { ContactComponent } from './contact/contact.component'; // Importez votre composant Contact


import { DisplayDataComponent } from './display-data/display-data.component';
import { ServicesComponent } from './services/services.component';
// Importez le composant Entreprise
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ParticulierComponent } from './particulier/particulier.component';
import { TestComponent } from './test/test.component';
import { Autorisation1Component } from './autorisation1/autorisation1.component';
import { RsComponent } from './rs/rs.component';


// Ajoutez votre route



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },
  // Route pour la page d'accueil
  { path: 'entreprise', component: EntrepriseComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'particulier', component: ParticulierComponent },
  { path: 'autorisation1', component: Autorisation1Component },
  { path: 'rs', component: RsComponent},
  
 
 
  
  { path: 'display-data', component: DisplayDataComponent },
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
