import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importez votre composant Home
import { ContactComponent } from './contact/contact.component'; // Importez votre composant Contact
import { ChoixComponent } from './choix/choix.component'; // Importez votre composant Contact
import { FormComponent } from './form/form.component'; // Importez le composant FormComponent

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // Route pour la page d'accueil
  { path: 'contact', component: ContactComponent }, 
  { path: 'choix', component: ChoixComponent }, 
  { path: 'form', component: FormComponent }, // Ajoutez cette ligne pour le composant Form
  // Ajoutez cette ligne pour le composant Choix
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
