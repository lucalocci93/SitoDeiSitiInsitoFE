import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { NuovoUtenteComponent } from './Component/nuovo-utente/nuovo-utente.component';
import { ContattiComponent } from './Component/contatti/contatti.component';
import { DocumentiComponent } from './Component/documenti/documenti.component';
import { GestioneutentiComponent } from './Component/gestioneutenti/gestioneutenti.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'login/newuser', component: NuovoUtenteComponent, pathMatch: 'full' },
  { path: 'contatti', component: ContattiComponent, pathMatch: 'full' },
  { path: 'documenti', component: DocumentiComponent, pathMatch: 'full' },
  { path: 'gestioneutenti', component: GestioneutentiComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
