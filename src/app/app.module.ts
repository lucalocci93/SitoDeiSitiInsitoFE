import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

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
import { SpinnerComponent } from './Component/spinner/spinner.component';

import { CommonService } from '../Services/Common/common.service';
import { LoginService } from '../Services/Login/login.service';
import { UtentiService } from 'src/Services/Utenti/utenti.service';
import { ModaleComponent } from './Component/modale/modale.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoadingInterceptor } from './Interceptor/loading.interceptor';

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
        ModaleComponent,
        SpinnerComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgxPaginationModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule],
    providers: [
            CommonService,
            LoginService,
            UtentiService,
            provideHttpClient(withInterceptorsFromDi()),
            provideAnimationsAsync(),
            {
                provide: HTTP_INTERCEPTORS, 
                useClass: LoadingInterceptor, 
                multi: true
            }
        ]})
export class AppModule { }
