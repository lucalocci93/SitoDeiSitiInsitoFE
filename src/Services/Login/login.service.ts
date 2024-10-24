import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

//import * as sha256 from 'sha.js';
import { catchError, firstValueFrom, map, Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/Model/User/User';
import { HTTPResponseError, Response } from 'src/app/Model/Base/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ApiEndpoint: string = environment.apiEndpoint;
  Token: string = "";
  constructor(private http: HttpClient) { }

  async login(email: string, password: string){

    var cryptedEmail = email;//sha256('sha256').update(email).digest('hex');
    var cryptedPassword = password;//sha256('sha256').update(password).digest('hex');

    const headers = new HttpHeaders({'accept': '*/*' });
    let endpoint = this.ApiEndpoint.concat("Authenticate?Username=", cryptedEmail, "&", "Password=", cryptedPassword);

    const params = {
      Username: cryptedEmail,
      Password: cryptedPassword
    };

    return await this.http.get(endpoint, { responseType: "text" });

    //return this.http.get<Response<string>>(endpoint, { headers, responseType: 'text'}).pipe(
    //  map(response => {
    //    new Response<string>(response, new HTTPResponseError(200, "OK"))}),
    //    catchError(response => of(new Response<string>(null, new HTTPResponseError(response.status, response.error)))) 
    //  );
  }

  async NewUser(userForm: User): Promise<Observable<Response<string>>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let endpoint = this.ApiEndpoint.concat("CreateUser");
    let body = JSON.stringify(userForm);

    return this.http.post<User>(endpoint, body, { headers }).pipe(
      map(response => new Response<string>("OK", new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<string>(null, new HTTPResponseError(response.status, response.error))))
    );
  }
}
