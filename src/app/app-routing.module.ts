import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { NuovoUtenteComponent } from './Component/login/nuovo-utente/nuovo-utente.component';
import { ContattiComponent } from './Component/contatti/contatti.component';
import { DocumentiComponent } from './Component/User/documenti/documenti.component';
import { GestioneutentiComponent } from './Component/Admin/gestioneutenti/gestioneutenti.component';
import { AbbonamentiComponent } from './Component/User/abbonamenti/abbonamenti.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'login/newuser', component: NuovoUtenteComponent, pathMatch: 'full' },
  { path: 'contatti', component: ContattiComponent, pathMatch: 'full' },
  { path: 'documenti', component: DocumentiComponent, pathMatch: 'full' },
  { path: 'abbonamenti', component: AbbonamentiComponent, pathMatch: 'full' },
  { path: 'gestioneutenti', component: GestioneutentiComponent, pathMatch: 'full' }
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
