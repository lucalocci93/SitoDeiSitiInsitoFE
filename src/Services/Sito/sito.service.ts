import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Response, HTTPResponseError } from 'src/app/Model/Base/response';
import { environment } from 'src/environments/environment';
import { Pages } from 'src/app/Interface/Pagine'
import { Page } from 'ngx-pagination';
import { CommonService } from '../Common/common.service';
import { Graphics } from 'src/app/Model/Sito/Grafica';
@Injectable({
  providedIn: 'root'
})
export class SitoService {

  ApiEndpoint: string = environment.apiEndpoint;
  Token: string = "";
  constructor(private http: HttpClient, private common: CommonService) { }

  async GetGrafiche(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
      let endpoint = this.ApiEndpoint.concat("GetGrafiche");
    
      return this.http.get<Graphics[]>(endpoint, {headers}).pipe(
        map(response => new Response<Graphics[]>(response, new HTTPResponseError(200, "OK"))),
        catchError(response => of(new Response<Graphics[]>(null, new HTTPResponseError(response.status, response.error))))
      );
    
  }

  async GetImmaginiByPagina(id: number){
    
    const headers = new HttpHeaders({'accept': '*/*' });
    let endpoint = this.ApiEndpoint.concat("GetGraficheByPagina?Pagina=" + id);

    return this.http.get<Graphics[]>(endpoint, {headers}).pipe(
      map(response => new Response<Graphics[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Graphics[]>(null, new HTTPResponseError(response.status, response.error))))
    );

  }

  async AddImmagine(image : Graphics ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("AddGrafica");
    let body = JSON.stringify(image);
  
    return this.http.post<Graphics>(endpoint, body, {headers}).pipe(
      map(response => new Response<Graphics>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Graphics>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async RemoveImmagine(image : Graphics ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("RemoveGrafica?id=" + image.id);
  
    return this.http.delete<Graphics>(endpoint, {headers}).pipe(
      map(response => new Response<Graphics>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Graphics>(null, new HTTPResponseError(response.status, response.error))))
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
