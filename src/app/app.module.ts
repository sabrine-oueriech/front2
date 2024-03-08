import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { CirculationComponent } from './circulation/circulation.component';
import { ChoixComponent } from './choix/choix.component';
import { FormComponent } from './form/form.component';
import { Autori2Component } from './autori2/autori2.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { LoginComponent } from './login/login.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CirculationComponent,
    ChoixComponent,
    FormComponent,
    Autori2Component,
    DisplayDataComponent,
    LoginComponent,
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
