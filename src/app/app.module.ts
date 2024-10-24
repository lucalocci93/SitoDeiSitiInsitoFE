import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { NuovoUtenteComponent } from './Component/nuovo-utente/nuovo-utente.component';
import { CookieConsentComponent } from './Component/cookie-consent/cookie-consent.component';
import { ContattiComponent } from './Component/contatti/contatti.component';
import { DocumentiComponent } from './Component/documenti/documenti.component';
import { GestioneutentiComponent } from './Component/gestioneutenti/gestioneutenti.component';

import { CommonService } from '../Services/Common/common.service';
import { LoginService } from '../Services/Login/login.service';
import { UtentiService } from 'src/Services/Utenti/utenti.service';
import { ModaleComponent } from './Component/modale/modale.component';

@NgModule({ declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        LoginComponent,
        NuovoUtenteComponent,
        CookieConsentComponent,
        ContattiComponent,
        DocumentiComponent,
        GestioneutentiComponent,
        ModaleComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgxPaginationModule], providers: [CommonService, LoginService, UtentiService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
