import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
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
import { MarkdownModule } from 'ngx-markdown';
import { YouTubePlayerModule } from '@angular/youtube-player';

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
import { EventiService } from 'src/Services/Eventi/eventi.service';
import { GestioneEventiComponent } from './Component/Admin/gestioneEventi/gestione-eventi.component';
import { EventiComponent } from './Component/User/eventi/eventi.component';
import { DatePipe } from '@angular/common';
import { GestioneGraficaComponent } from './Component/Admin/gestione-sito/gestioneGrafica/gestionegrafica.component';
import { NewsComponent } from './Component/news/news.component';
import { GestioneSitoComponent } from './Component/Admin/gestione-sito/gestione-sito.component';
import { GestioneRedirezioniComponent } from './Component/Admin/gestione-sito/gestione-redirezioni/gestione-redirezioni.component';
import { GestioneVideoComponent } from './Component/Admin/gestione-sito/gestione-video/gestione-video.component';
import { VideoComponent } from './Component/User/video/video.component';
import { SitoService } from 'src/Services/Sito/sito.service';
import { SafeUrlPipe } from 'src/pipe/safe-url.pipe';
import { SSEService } from 'src/Services/Sito/SSE.service';

@NgModule({ declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        LoginComponent,
        NewsComponent,
        VideoComponent,
        NuovoUtenteComponent,
        CookieConsentComponent,
        ContattiComponent,
        DocumentiComponent,
        EventiComponent,
        AbbonamentiComponent,
        GestioneutentiComponent,
        GestioneEventiComponent,
        GestioneSitoComponent,
        GestioneGraficaComponent,
        GestioneRedirezioniComponent,
        GestioneVideoComponent,
        ModaleComponent,
        SpinnerComponent,
        SafeUrlPipe
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
        MatOptionModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MarkdownModule.forRoot(),
        YouTubePlayerModule,
    ],
    providers: [
            CommonService,
            LoginService,
            UtentiService,
            EventiService,
            SitoService,
            SSEService,
            provideHttpClient(withInterceptorsFromDi()),
            provideAnimationsAsync(),
            {
                provide: HTTP_INTERCEPTORS, 
                useClass: LoadingInterceptor, 
                multi: true
            },
            (environment.demo ? [{ provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }] : []),
            DatePipe,
            ]
        }
    )
    
export class AppModule { }
