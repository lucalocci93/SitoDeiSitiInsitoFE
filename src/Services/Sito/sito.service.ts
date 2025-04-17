import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Response, HTTPResponseError } from 'src/app/Model/Base/response';
import { environment } from 'src/environments/environment';
import { Pages } from 'src/app/Interface/Pagine'
import { Page } from 'ngx-pagination';
import { CommonService } from '../Common/common.service';
import { Images } from 'src/app/Model/Sito/Immagine';
@Injectable({
  providedIn: 'root'
})
export class SitoService {

  ApiEndpoint: string = environment.apiEndpoint;
  Token: string = "";
  constructor(private http: HttpClient, private common: CommonService) { }

  async GetImmagini(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
      let endpoint = this.ApiEndpoint.concat("GetImmmagini");
    
      return this.http.get<Images[]>(endpoint, {headers}).pipe(
        map(response => new Response<Images[]>(response, new HTTPResponseError(200, "OK"))),
        catchError(response => of(new Response<Images[]>(null, new HTTPResponseError(response.status, response.error))))
      );
    
  }

  async GetImmaginiByPagina(id: number){
    
    const headers = new HttpHeaders({'accept': '*/*' });
    let endpoint = this.ApiEndpoint.concat("GetImmmaginiByPagina?Pagina=" + id);

    return this.http.get<Images[]>(endpoint, {headers}).pipe(
      map(response => new Response<Images[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Images[]>(null, new HTTPResponseError(response.status, response.error))))
    );

  }

  async AddImmagine(image : Images ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("AddImmagine");
    let body = JSON.stringify(image);
  
    return this.http.post<Images>(endpoint, body, {headers}).pipe(
      map(response => new Response<Images>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Images>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async RemoveImmagine(image : Images ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("RemoveImmagine?id=" + image.id);
  
    return this.http.delete<Images>(endpoint, {headers}).pipe(
      map(response => new Response<Images>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Images>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async GetPagine(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetPagine");
  
    return this.http.get<Pages[]>(endpoint, {headers}).pipe(
      map(response => new Response<Pages[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Pages[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }
  
}
