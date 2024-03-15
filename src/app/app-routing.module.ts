import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importez votre composant Home
import { ContactComponent } from './contact/contact.component'; // Importez votre composant Contact

import { FormComponent } from './form/form.component'; // Importez le composant FormComponent
import { DisplayDataComponent } from './display-data/display-data.component';
import { ServicesComponent } from './services/services.component';
// Importez le composant Entreprise
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ParticulierComponent } from './particulier/particulier.component';


// Ajoutez votre route



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // Route pour la page d'accueil
  { path: 'entreprise', component: EntrepriseComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'particulier', component: ParticulierComponent },
 
 
  
  { path: 'display-data', component: DisplayDataComponent },
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
