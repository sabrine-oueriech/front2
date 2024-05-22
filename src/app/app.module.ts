import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { RouterModule, Routes } from '@angular/router'; // Importation de RouterModule et Routes
import { FormComponent } from './form/form.component';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompteComponent } from './compte/compte.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ParticulierComponent } from './particulier/particulier.component';

import { Autorisation2Component } from './autorisation2/autorisation2.component';
import { Autorisation3Component } from './autorisation3/autorisation3.component';
import { Autorisation4Component } from './autorisation4/autorisation4.component';
import { InspecteurComponent } from './inspecteur/inspecteur.component';
import {ChefComponent } from './chef/chef.component';
import { AfficheformComponent } from './afficheform/afficheform.component';
import { AjoutbureauComponent } from './ajoutbureau/ajoutbureau.component';
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './chat/chat.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { UserListComponent } from './user-list/user-list.component';
import { DemandeComponent } from './demande/demande.component';
import { AuthIntercepterService } from './service/interceptor.interceptor';
import { Autorisation1Component } from './autorisation1/autorisation1.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { RecComponent } from './rec/rec.component';
import { DatePipe } from '@angular/common';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FormComponent,
    
    CompteComponent,
    EntrepriseComponent,
    ParticulierComponent,
   
    Autorisation2Component,
    Autorisation3Component,
    Autorisation4Component,
    ChefComponent,
    InspecteurComponent,
    AfficheformComponent,
    AjoutbureauComponent,
    AdminComponent,
    ChatComponent,
    SidebarComponent,
  
    NotFoundComponent,
    UserListComponent,
    DemandeComponent,
    Autorisation1Component,
    ReclamationComponent,
    UserListComponent,
    RecComponent,
    TestComponent
   

    // ... vos autres déclarations de composants ici
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbDropdownModule,
    SocialLoginModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    MatButtonToggleModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [
    {provide :HTTP_INTERCEPTORS, useClass:AuthIntercepterService,multi :true},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
      
        ]
      } as SocialAuthServiceConfig,
    },
    provideAnimationsAsync(),
    // ... vos autres providers ici
    DatePipe 
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Si vous utilisez des éléments personnalisés
})
export class AppModule { }
