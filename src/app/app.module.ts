import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { CirculationComponent } from './circulation/circulation.component';

import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';

import { DisplayDataComponent } from './display-data/display-data.component';

import { ZXingScannerModule } from '@zxing/ngx-scanner';


import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CompteComponent } from './compte/compte.component';
import { ServicesComponent } from './services/services.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ParticulierComponent } from './particulier/particulier.component';


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CirculationComponent,
   
    FormComponent,
 
    DisplayDataComponent,
       CompteComponent,
       ServicesComponent,
       EntrepriseComponent,
       ParticulierComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule ,
    ZXingScannerModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
