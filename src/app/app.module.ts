import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResidenceComponent } from './residence/residence.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app.routing.module';
import { AnnonceModule } from './annonce/annonce.module';
import { FormulaireComponent } from './formulaire/formulaire.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResidenceComponent,
    HomeComponent,
    NotfoundComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnnonceModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
