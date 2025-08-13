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
import { Notification } from 'src/app/Interface/Notification';
import { Notifica } from 'src/app/Model/Sito/Notifica';
import { ITemplate } from 'src/app/Interface/ITemplate';
@Injectable({
  providedIn: 'root'
})
export class SitoService {

  ApiEndpoint: string = environment.apiEndpoint.concat('Sito/');
  Token: string = "";
  constructor(private http: HttpClient, private common: CommonService) { }

  GetGrafiche(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
      let endpoint = this.ApiEndpoint.concat("GetGrafiche");
    
      return this.http.get<Graphics[]>(endpoint, {headers}).pipe(
        map(response => new Response<Graphics[]>(response, new HTTPResponseError(200, "OK"))),
        catchError(response => of(new Response<Graphics[]>(null, new HTTPResponseError(response.status, response.error))))
      );
    
  }

  GetGraficheByPagina(id: number){
    
    const headers = new HttpHeaders({'accept': '*/*' });
    let endpoint = this.ApiEndpoint.concat("GetGraficheByPagina?Pagina=" + id);

    return this.http.get<Graphics[]>(endpoint, {headers}).pipe(
      map(response => new Response<Graphics[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Graphics[]>(null, new HTTPResponseError(response.status, response.error))))
    );

  }

  AddGrafica(image : Graphics ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("AddGrafica");
    let body = JSON.stringify(image);
  
    return this.http.post<Graphics>(endpoint, body, {headers}).pipe(
      map(response => new Response<Graphics>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Graphics>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  RemoveGrafica(image : Graphics ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("RemoveGrafica?id=" + image.id);
  
    return this.http.delete<Graphics>(endpoint, {headers}).pipe(
      map(response => new Response<Graphics>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Graphics>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  ToggleGrafica(grafica : Graphics ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("ToggleGrafica");
    let body = JSON.stringify(grafica);
  
    return this.http.put<Graphics>(endpoint, body, {headers}).pipe(
      map(response => new Response<Graphics>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Graphics>(null, new HTTPResponseError(response.status, response.error))))
    );
  }


  GetPagine(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetPagine");
  
    return this.http.get<Pages[]>(endpoint, {headers}).pipe(
      map(response => new Response<Pages[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Pages[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  GetRedirezioni(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetRedirezioni");
  
    return this.http.get<Redirection[]>(endpoint, {headers}).pipe(
      map(response => new Response<Redirection[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Redirection[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  AddRedirezioni(redirection : Redirection ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("AddRedirezione");
    let body = JSON.stringify(redirection);
  
    return this.http.post<Redirection>(endpoint, body, {headers}).pipe(
      map(response => new Response<Redirection>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Redirection>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  RemoveRedirezione(redirezione : Redirection ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("RemoveRedirezione?id=" + redirezione.id);
  
    return this.http.delete<Redirection>(endpoint, {headers}).pipe(
      map(response => new Response<Redirection>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Redirection>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  ToggleRedirezione(redirezione : Redirection ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("ToggleRedirezione");
    let body = JSON.stringify(redirezione);
  
    return this.http.put<Redirection>(endpoint, body, {headers}).pipe(
      map(response => new Response<Redirection>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Redirection>(null, new HTTPResponseError(response.status, response.error))))
    );
  }


  GetVideo(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetVideo");
  
    return this.http.get<Video[]>(endpoint, {headers}).pipe(
      map(response => new Response<Video[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Video[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  AddVideo(video : Video ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("AddVideo");
    let body = JSON.stringify(video);
  
    return this.http.post<Video>(endpoint, body, {headers}).pipe(
      map(response => new Response<Video>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Video>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  RemoveVideo(video : Video ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("RemoveVideo?id=" + video.id);
  
    return this.http.delete<Video>(endpoint, {headers}).pipe(
      map(response => new Response<Video>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Video>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  ToggleVideo(video : Video ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("ToggleVideo");
    let body = JSON.stringify(video);
  
    return this.http.put<Video>(endpoint, body, {headers}).pipe(
      map(response => new Response<Video>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Video>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  GetNotificationByPage(id: number){
    const headers = new HttpHeaders({'accept': '*/*' });
    let endpoint = this.ApiEndpoint.concat("GetNotificheByPagina?Pagina=" + id);

    return this.http.get<Notification[]>(endpoint, {headers}).pipe(
      map(response => new Response<Notification[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Notification[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  GetNotification(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetNotifiche");

    return this.http.get<Notification[]>(endpoint, {headers}).pipe(
      map(response => new Response<Notification[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Notification[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  UpdateNotifica(notifica: Notification){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("UpdateNotification");
    let body = JSON.stringify(notifica);
  
    return this.http.put<Notification>(endpoint, body, {headers}).pipe(
      map(response => new Response<Notification>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Notification>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  AddNotifica(notifica : Notifica){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("CreateNotification");
    let body = JSON.stringify(notifica);
  
    return this.http.post<Notification>(endpoint, body, {headers}).pipe(
      map(response => new Response<Notification>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Notification>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  GetTemplates(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetTemplates");

    return this.http.get<ITemplate[]>(endpoint, {headers}).pipe(
      map(response => new Response<ITemplate[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<ITemplate[]>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  UpdateTemplate(template: ITemplate){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("UpdateTemplate");
    let body = JSON.stringify(template);
  
    return this.http.put<ITemplate>(endpoint, body, {headers}).pipe(
      map(response => new Response<ITemplate>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<ITemplate>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

  AddTemplate(template: ITemplate){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("CreateTemplate");
    let body = JSON.stringify(template);
  
    return this.http.post<ITemplate>(endpoint, body, {headers}).pipe(
      map(response => new Response<ITemplate>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<ITemplate>(null, new HTTPResponseError(response.status, response.error))))
    );
  }
}
