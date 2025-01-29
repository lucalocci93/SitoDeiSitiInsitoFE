import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../Common/common.service';
import { environment } from 'src/environments/environment';
import { Evento } from 'src/app/Model/Evento/Evento';
import { Response, HTTPResponseError } from 'src/app/Model/Base/Response';
import { catchError, map, of } from 'rxjs';
import { Categoria } from 'src/app/Model/Evento/Categoria';
import { Iscrizione, SingolaIscrizione } from 'src/app/Model/Evento/Iscrizione';
import { Competitors } from 'src/app/Interface/Competitors';
import { DocumentoExt } from 'src/app/Model/Documento/Documento';

@Injectable({
  providedIn: 'root'
})
export class EventiService {

  ApiEndpoint: string = environment.apiEndpoint;

  constructor(private http: HttpClient, private common: CommonService) { }

  async GetEventi(){
      const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
      let endpoint = this.ApiEndpoint.concat("GetEvents");
    
      return this.http.get<Evento[]>(endpoint, {headers}).pipe(
        map(response => new Response<Evento[]>(response, new HTTPResponseError(200, "OK"))),
        catchError(response => of(new Response<Evento[]>(null, new HTTPResponseError(response.status, response.error))))
      );
    
  }

  async GetCategorie(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetCategories");

    return this.http.get<Categoria[]>(endpoint, {headers}).pipe(
      map(response => new Response<Categoria[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Categoria[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async AddEvent(event : Evento ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("CreateEvent");
    let body = JSON.stringify(event);

    return this.http.post<Evento>(endpoint, body, {headers}).pipe(
      map(response => new Response<Evento>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Evento>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async GetEvento(Id : string | null | undefined ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetEvent?Id=" + Id);

    return this.http.get<Evento>(endpoint, {headers}).pipe(
      map(response => new Response<Evento>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Evento>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async UpdateEvent(event : Evento ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("UpdateEvent");
    let body = JSON.stringify(event);

    return this.http.put<Evento>(endpoint, body, {headers}).pipe(
      map(response => new Response<Evento>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Evento>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async Subscribe(Subscription : Iscrizione ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("SubscribeEvent");
    let body = JSON.stringify(Subscription);

    return this.http.post<Iscrizione>(endpoint, body, {headers}).pipe(
      map(response => new Response<Iscrizione>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Iscrizione>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async GetSubscription(UserId : string | null){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetEventSubscriptionByUser?UserId=" + UserId);

    return this.http.get<SingolaIscrizione[]>(endpoint, {headers}).pipe(
      map(response => new Response<SingolaIscrizione[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<SingolaIscrizione[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async DeleteSubscription(EventId: string | null | undefined, UserId: string | null, Category: number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("DeleteSubscription?EventId=" + EventId + "&UserId=" + UserId + "&Category=" + Category);

    return this.http.delete<SingolaIscrizione>(endpoint, {headers}).pipe(
      map(response => new Response<SingolaIscrizione>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<SingolaIscrizione>(null, new HTTPResponseError(response.status, response.error))))
    );

  }

  async GetCompetitors(EventId : string | null){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetCompetitors?EventId=" + EventId);

    return this.http.get<Competitors[]>(endpoint, {headers}).pipe(
      map(response => new Response<Competitors[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Competitors[]>(null, new HTTPResponseError(response.status, response.error))))
    );

  }

  async GetCompetitorExcel(EventId : string | null){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetCompetitorsFile?EventId=" + EventId);

    return this.http.get<DocumentoExt>(endpoint, {headers}).pipe(
      map(response => new Response<DocumentoExt>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<DocumentoExt>(null, new HTTPResponseError(response.status, response.error))))
    );

  }


}
