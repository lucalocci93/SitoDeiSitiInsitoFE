import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../Common/common.service';
import { catchError, map, Observable, of } from 'rxjs';
import { Response, HTTPResponseError } from 'src/app/Model/Base/response';
import { Abbonamento } from 'src/app/Model/Abbonamento/Abbonamento';
import { TipoAbbonamento } from 'src/app/Model/Abbonamento/tipo-abbonamento';
import { SubscriptionOperation } from 'src/app/Model/Base/enum';

@Injectable({
  providedIn: 'root'
})
export class AbbonamentiService {

  ApiEndpoint: string = environment.apiEndpoint.concat("Abbonamento/");

  constructor(private http: HttpClient, private common: CommonService) { }

  GetAbbonamenti(Rowguid : string | null) : Observable<Response<Abbonamento[]>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetUserSubscriptions?Utente=" + Rowguid);

    return this.http.get<Abbonamento[]>(endpoint, {headers}).pipe(
      map(response => new Response<Abbonamento[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Abbonamento[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  GetTipoAbbonamenti(Rowguid : string | null) : Observable<Response<TipoAbbonamento[]>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetSubscriptionType");

    return this.http.get<TipoAbbonamento[]>(endpoint, {headers}).pipe(
      map(response => new Response<TipoAbbonamento[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<TipoAbbonamento[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  AddAbbonamenti(Subscription : Abbonamento | null) : Observable<Response<string>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("AddUserSubscription");
    let body = JSON.stringify(Subscription);

    return this.http.post<string>(endpoint, body, {headers}).pipe(
      map(response => new Response<string>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<string>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  UpdateAbbonamenti(operation: SubscriptionOperation, Subscription : Abbonamento | null) : Observable<Response<string>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("UpdateSubscription/" + operation);
    let body = JSON.stringify(Subscription);

    return this.http.put<string>(endpoint, body, {headers}).pipe(
      map(response => new Response<string>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<string>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

}
