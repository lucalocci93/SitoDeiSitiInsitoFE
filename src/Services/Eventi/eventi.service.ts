import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../Common/common.service';
import { environment } from 'src/environments/environment';
import { Evento } from 'src/app/Model/Evento/Evento';
import { Response, HTTPResponseError } from 'src/app/Model/Base/response';
import { catchError, map, of } from 'rxjs';
import { Categoria } from 'src/app/Model/Evento/Categoria';
import { Iscrizione, SingolaIscrizione } from 'src/app/Model/Evento/Iscrizione';
import { Competitors } from 'src/app/Interface/Competitors';
import { DocumentoExt } from 'src/app/Model/Documento/Documento';
import { Competition } from 'src/app/Model/Evento/Competition';

@Injectable({
  providedIn: 'root'
})
export class EventiService {

  ApiEndpoint: string = environment.apiEndpoint.concat("Eventi/");

  constructor(private http: HttpClient, private common: CommonService) { }

  GetEventi(){
      const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
      let endpoint = this.ApiEndpoint.concat("GetEvents");
    
      return this.http.get<Evento[]>(endpoint, {headers}).pipe(
        map(response => new Response<Evento[]>(response, new HTTPResponseError(200, "OK"))),
        catchError(response => of(new Response<Evento[]>(null, new HTTPResponseError(response.status, response.error))))
      );
    
  }

  GetCategorie(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetCategories");

    return this.http.get<Categoria[]>(endpoint, {headers}).pipe(
      map(response => new Response<Categoria[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Categoria[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  AddEvent(event : Evento ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("CreateEvent");
    let body = JSON.stringify(event);

    return this.http.post<Evento>(endpoint, body, {headers}).pipe(
      map(response => new Response<Evento>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Evento>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  GetEvento(Id : string | null | undefined ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetEvent?Id=" + Id);

    return this.http.get<Evento>(endpoint, {headers}).pipe(
      map(response => new Response<Evento>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Evento>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  UpdateEvent(event : Evento ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("UpdateEvent");
    let body = JSON.stringify(event);

    return this.http.put<Evento>(endpoint, body, {headers}).pipe(
      map(response => new Response<Evento>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Evento>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  Subscribe(Subscription : Iscrizione ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("SubscribeEvent");
    let body = JSON.stringify(Subscription);

    return this.http.post<Iscrizione>(endpoint, body, {headers}).pipe(
      map(response => new Response<Iscrizione>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Iscrizione>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  GetSubscription(UserId : string | null){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetEventSubscriptionByUser?UserId=" + UserId);

    return this.http.get<SingolaIscrizione[]>(endpoint, {headers}).pipe(
      map(response => new Response<SingolaIscrizione[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<SingolaIscrizione[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  DeleteSubscription(Subscription: Iscrizione){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("DeleteSubscription");
    let body = JSON.stringify(Subscription);

    return this.http.post<SingolaIscrizione>(endpoint, body, {headers}).pipe(
      map(response => new Response<SingolaIscrizione>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<SingolaIscrizione>(null, new HTTPResponseError(response.status, response.error))))
    );

  }

  GetCompetitors(EventId : string | null){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetCompetitors?EventId=" + EventId);

    return this.http.get<Competitors[]>(endpoint, {headers}).pipe(
      map(response => new Response<Competitors[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Competitors[]>(null, new HTTPResponseError(response.status, response.error))))
    );

  }

  GetCompetitionsByEvent(EventId : string | null){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetCompetitions?EventId=" + EventId);

    return this.http.get<Competition[]>(endpoint, {headers}).pipe(
      map(response => new Response<Competition[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Competition[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  GetCompetitionsByEventAndUser(EventId : string | null | undefined, UserId: string | null){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetCompetitionsByEventAndUser?EventId=" + EventId + "&UserId=" + UserId);

    return this.http.get<Competition[]>(endpoint, {headers}).pipe(
      map(response => new Response<Competition[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Competition[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  AddCompetition(competition : Competition){
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("AddCompetition");
    let body = JSON.stringify(competition);

    return this.http.post<Competition>(endpoint, body, {headers}).pipe(
      map(response => new Response<Competition>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Competition>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  DeleteCompetition(competitionId: string | null, EventId: string | null){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("DeleteCompetition?CompetitionId=" + competitionId + "&EventId=" + EventId);

    return this.http.delete<Competition>(endpoint, {headers}).pipe(
      map(response => new Response<Competition>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Competition>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  GetReportIscrizioni(EventId : string | null | undefined, UserId: string | null){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetCompetitionSubscriptionReportByUser?EventId=" + EventId + "&UserId=" + UserId);

    return this.http.get<DocumentoExt>(endpoint, {headers}).pipe(
      map(response => new Response<DocumentoExt>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<DocumentoExt>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  GetReportIscrizioniByMaster(EventId : string | null | undefined, Org: string | null){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetCompetitionSubscriptionReportByMaster?EventId=" + EventId + "&Org=" + Org);

    return this.http.get<DocumentoExt>(endpoint, {headers}).pipe(
      map(response => new Response<DocumentoExt>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<DocumentoExt>(null, new HTTPResponseError(response.status, response.error))))
    );
  }


  GetCompetitorExcel(EventId : string | null){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetCompetitorsFile?EventId=" + EventId);

    return this.http.get<DocumentoExt>(endpoint, {headers}).pipe(
      map(response => new Response<DocumentoExt>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<DocumentoExt>(null, new HTTPResponseError(response.status, response.error))))
    );

  }


}
