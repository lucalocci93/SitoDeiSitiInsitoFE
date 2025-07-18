import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../Common/common.service';
import { User } from 'src/app/Model/User/User';
import { HTTPResponseError, Response } from 'src/app/Model/Base/response';
import { catchError, map, Observable, of } from 'rxjs';
import { Operation } from 'src/app/Model/Base/enum';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  ApiEndpoint: string = environment.apiEndpoint;

  constructor(private http: HttpClient, private common : CommonService) {
    
   }

  GetAllUtenti() : Observable<Response<User[]>>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetAllUsers");

    return this.http.get<User[]>(endpoint, {headers}).pipe(
      map(response => new Response<User[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<User[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  GetUtente(RowGuid : string | null) : Observable<Response<User>>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetUser?RowGuid=" + RowGuid);

    return this.http.get<User>(endpoint, {headers}).pipe(
      map(response => new Response<User>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<User>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  UpdateUtente(user : User, operation: Operation) : Observable<Response<string>>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("UpdateUser/" + operation);
    let body = JSON.stringify(user);

    return this.http.put<string>(endpoint, body, {headers}).pipe(
      map(response => new Response<string>("OK", new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<string>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

}
