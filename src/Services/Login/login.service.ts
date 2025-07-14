import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

//import * as sha256 from 'sha.js';
import { catchError, firstValueFrom, map, Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/Model/User/User';
import { HTTPResponseError, Response } from 'src/app/Model/Base/response';
import { Jwt } from 'src/app/Interface/Jwt';
import { sha256 } from 'js-sha256';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ApiEndpoint: string = environment.apiEndpoint;
  Token: string = "";
  constructor(private http: HttpClient) { }

  login(email: string, password: string){

    //var cryptedEmail = sha256(email);
    var cryptedPassword = sha256(password);

    const headers = new HttpHeaders({'accept': '*/*' });
    let endpoint = this.ApiEndpoint.concat("Authenticate?Username=", email, "&", "Password=", cryptedPassword);

    return this.http.get<Jwt>(endpoint, {headers}).pipe(
      map(response => new Response<Jwt>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Jwt>(null, new HTTPResponseError(response.status, response.error))))
  );
    
    //return await this.http.get(endpoint, { responseType: "text" });

    //return this.http.get(endpoint, { headers, responseType: 'text'}).pipe(
    //  map(response => {
    //    new Response<string>(response, new HTTPResponseError(200, "OK"))}),
    //    catchError(response => of(new Response<string>(null, new HTTPResponseError(response.status, response.error)))) 
    //  );
  }

  NewUser(userForm: User) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let endpoint = this.ApiEndpoint.concat("CreateUser");
    let body = JSON.stringify(userForm);

    return this.http.post<User>(endpoint, body, { headers }).pipe(
      map(response => new Response<string>("OK", new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<string>(null, new HTTPResponseError(response.status, response.error))))
    );
  }
}
