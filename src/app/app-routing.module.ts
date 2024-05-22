import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AjoutbureauComponent } from './ajoutbureau/ajoutbureau.component';

import { ChatComponent } from './chat/chat.component';

import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ParticulierComponent } from './particulier/particulier.component';
import { AdminComponent } from './admin/admin.component';
import { Autorisation2Component } from './autorisation2/autorisation2.component';
import { Autorisation3Component } from './autorisation3/autorisation3.component';
import { CompteComponent } from './compte/compte.component';
import { Autorisation4Component } from './autorisation4/autorisation4.component';
import {InspecteurComponent } from './inspecteur/inspecteur.component';
import { ChefComponent } from './chef/chef.component';
import { AfficheformComponent } from './afficheform/afficheform.component';
import { GuardService } from './service/gards/guard.service';
import { RoleGuard  } from './service/gards/role.guard';


import  { UserListComponent } from './user-list/user-list.component';
import { DemandeComponent } from './demande/demande.component';
import { Autorisation1Component } from './autorisation1/autorisation1.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { RecComponent } from './rec/rec.component';
import { TestComponent } from './test/test.component';
 


const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' }, 
  { path: '', component: HomeComponent },
  { path: 'entreprise', component: EntrepriseComponent   },
  { path: 'contact', component: ContactComponent  },
  { path: 'particulier', component: ParticulierComponent, canActivate: [GuardService] },
  { path: 'autorisation1', component: Autorisation1Component },
  { path: 'autorisation2', component: Autorisation2Component },
  { path: 'autorisation3', component: Autorisation3Component },
  { path: 'compte', component: CompteComponent  },
  { path: 'admin', component: AdminComponent},
  { path: 'autorisation4', component: Autorisation4Component },
  { path: 'inspecteur', component: InspecteurComponent },
  { path: 'chef', component: ChefComponent },
  { path: 'afficheform', component: AfficheformComponent },
  { path: 'ajoutbureau', component: AjoutbureauComponent },
  { path: 'test', component: TestComponent },
  

  { path: 'chat', component: ChatComponent },
 
   { path: 'reclamation',component : ReclamationComponent},
  { path: 'user-list', component: UserListComponent },
  { path: 'detail/:id', component: DemandeComponent },
  { path: 'rec', component: RecComponent },
 
 
];
@NgModule({
  imports: [

    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }