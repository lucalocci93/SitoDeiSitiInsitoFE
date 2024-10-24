import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../Common/common.service';
import { User } from 'src/app/Model/User/User';
import { HTTPResponseError, Response } from 'src/app/Model/Base/response';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  ApiEndpoint: string = environment.apiEndpoint;

  constructor(private http: HttpClient, private common : CommonService) { }

  async GetAllUtenti() : Promise<Observable<Response<User[]>>>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetAllUsers");

    return this.http.get<User[]>(endpoint, {headers}).pipe(
      map(response => new Response<User[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<User[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

}
