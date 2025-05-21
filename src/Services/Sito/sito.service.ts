import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Response, HTTPResponseError } from 'src/app/Model/Base/response';
import { environment } from 'src/environments/environment';
import { Pages } from 'src/app/Interface/Pagine'
import { Page } from 'ngx-pagination';
import { CommonService } from '../Common/common.service';
import { Graphics } from 'src/app/Model/Sito/Grafica';
import { Redirection } from 'src/app/Model/Sito/Redirezioni';
import { Video } from 'src/app/Model/Sito/Video';
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

  async GetGraficheByPagina(id: number){
    
    const headers = new HttpHeaders({'accept': '*/*' });
    let endpoint = this.ApiEndpoint.concat("GetGraficheByPagina?Pagina=" + id);

    return this.http.get<Graphics[]>(endpoint, {headers}).pipe(
      map(response => new Response<Graphics[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Graphics[]>(null, new HTTPResponseError(response.status, response.error))))
    );

  }

  async AddGrafica(image : Graphics ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("AddGrafica");
    let body = JSON.stringify(image);
  
    return this.http.post<Graphics>(endpoint, body, {headers}).pipe(
      map(response => new Response<Graphics>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Graphics>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async RemoveGrafica(image : Graphics ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("RemoveGrafica?id=" + image.id);
  
    return this.http.delete<Graphics>(endpoint, {headers}).pipe(
      map(response => new Response<Graphics>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Graphics>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async ToggleGrafica(grafica : Graphics ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("ToggleGrafica");
    let body = JSON.stringify(grafica);
  
    return this.http.put<Graphics>(endpoint, body, {headers}).pipe(
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

  async GetRedirezioni(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetRedirezioni");
  
    return this.http.get<Redirection[]>(endpoint, {headers}).pipe(
      map(response => new Response<Redirection[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Redirection[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async AddRedirezioni(redirection : Redirection ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("AddRedirezione");
    let body = JSON.stringify(redirection);
  
    return this.http.post<Redirection>(endpoint, body, {headers}).pipe(
      map(response => new Response<Redirection>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Redirection>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async RemoveRedirezione(redirezione : Redirection ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("RemoveRedirezione?id=" + redirezione.id);
  
    return this.http.delete<Redirection>(endpoint, {headers}).pipe(
      map(response => new Response<Redirection>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Redirection>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async ToggleRedirezione(redirezione : Redirection ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("ToggleRedirezione");
    let body = JSON.stringify(redirezione);
  
    return this.http.put<Redirection>(endpoint, body, {headers}).pipe(
      map(response => new Response<Redirection>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Redirection>(null, new HTTPResponseError(response.status, response.error))))
    );
  }


  async GetVideo(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetVideo");
  
    return this.http.get<Video[]>(endpoint, {headers}).pipe(
      map(response => new Response<Video[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Video[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async AddVideo(video : Video ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("AddVideo");
    let body = JSON.stringify(video);
  
    return this.http.post<Video>(endpoint, body, {headers}).pipe(
      map(response => new Response<Video>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Video>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async RemoveVideo(video : Video ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("RemoveVideo?id=" + video.id);
  
    return this.http.delete<Video>(endpoint, {headers}).pipe(
      map(response => new Response<Video>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Video>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  async ToggleVideo(video : Video ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("ToggleVideo");
    let body = JSON.stringify(video);
  
    return this.http.put<Video>(endpoint, body, {headers}).pipe(
      map(response => new Response<Video>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Video>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

}
