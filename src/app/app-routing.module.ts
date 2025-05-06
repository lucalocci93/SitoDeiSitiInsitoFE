import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { NuovoUtenteComponent } from './Component/login/nuovo-utente/nuovo-utente.component';
import { ContattiComponent } from './Component/contatti/contatti.component';
import { DocumentiComponent } from './Component/User/documenti/documenti.component';
import { GestioneutentiComponent } from './Component/Admin/gestioneutenti/gestioneutenti.component';
import { AbbonamentiComponent } from './Component/User/abbonamenti/abbonamenti.component';
import { GestioneEventiComponent } from './Component/Admin/gestioneEventi/gestione-eventi.component';
import { EventiComponent } from './Component/User/eventi/eventi.component';
import { GestioneGraficaComponent } from './Component/Admin/gestione-sito/gestioneGrafica/gestionegrafica.component';
import { NewsComponent } from './Component/news/news.component';
import { GestioneSitoComponent } from './Component/Admin/gestione-sito/gestione-sito.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'login/newuser', component: NuovoUtenteComponent, pathMatch: 'full' },
  { path: 'contatti', component: ContattiComponent, pathMatch: 'full' },
  { path: 'news', component: NewsComponent, pathMatch: 'full' },
  { path: 'documenti', component: DocumentiComponent, pathMatch: 'full' },
  { path: 'abbonamenti', component: AbbonamentiComponent, pathMatch: 'full' },
  { path: 'eventi', component: EventiComponent, pathMatch: 'full' },
  { path: 'gestioneutenti', component: GestioneutentiComponent, pathMatch: 'full' },
  { path: 'gestioneeventi', component: GestioneEventiComponent, pathMatch: 'full' },
  { path: 'gestionesito', component: GestioneSitoComponent, pathMatch: 'full' },
  { path: 'gestionesito/gestionegrafica', component: GestioneGraficaComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    canceledNavigationResolution: 'replace',
    paramsInheritanceStrategy: 'always',
    urlUpdateStrategy: 'eager'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
