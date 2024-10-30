import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { NuovoUtenteComponent } from './Component/login/nuovo-utente/nuovo-utente.component';
import { CookieConsentComponent } from './Component/cookie-consent/cookie-consent.component';
import { ContattiComponent } from './Component/contatti/contatti.component';
import { DocumentiComponent } from './Component/User/documenti/documenti.component';
import { GestioneutentiComponent } from './Component/Admin/gestioneutenti/gestioneutenti.component';
import { SpinnerComponent } from './Component/spinner/spinner.component';

import { CommonService } from '../Services/Common/common.service';
import { LoginService } from '../Services/Login/login.service';
import { UtentiService } from 'src/Services/Utenti/utenti.service';
import { ModaleComponent } from './Component/modale/modale.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoadingInterceptor } from './Interceptor/loading.interceptor';
import { AbbonamentiComponent } from './Component/User/abbonamenti/abbonamenti.component';
import { FakeBackendInterceptor, fakeBackendProvider } from './Interceptor/fake-backend.interceptor';
import { environment } from 'src/environments/environment';

@NgModule({ declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        LoginComponent,
        NuovoUtenteComponent,
        CookieConsentComponent,
        ContattiComponent,
        DocumentiComponent,
        AbbonamentiComponent,
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
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatMenuModule,
        MatSelectModule,
        MatOptionModule
    ],
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
            },
            (environment.demo ? [{ provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }] : [])
            ]
        }
    )
    
export class AppModule { }
