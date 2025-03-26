import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../Common/common.service';
import { environment } from 'src/environments/environment';
import { TipoDocumento } from 'src/app/Model/Documento/TipoDocumento';
import { Response, HTTPResponseError } from 'src/app/Model/Base/response';
import { catchError, map, of } from 'rxjs';
import { Documento, DocumentoExt } from 'src/app/Model/Documento/Documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentiService {

  ApiEndpoint: string = environment.apiEndpoint;

  constructor(private http: HttpClient, private common: CommonService) { }

  async GetTipiDocumenti(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetDocumentType");

    return this.http.get<TipoDocumento[]>(endpoint, {headers}).pipe(
      map(response => new Response<TipoDocumento[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<TipoDocumento[]>(null, new HTTPResponseError(response.status, response.error))))
    );

  }

  async AddDocument(Document : DocumentoExt){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("AddDocument");
    let body = JSON.stringify(Document);

    return this.http.post<string>(endpoint, body, {headers}).pipe(
      map(response => new Response<string>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<string>(null, new HTTPResponseError(response.status, response.error))))
    );

  }

  async GetUserDocuments(RowGuid : string | null){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetUserDocuments?User=" + RowGuid );

    return this.http.get<Documento[]>(endpoint, {headers}).pipe(
      map(response => new Response<Documento[]>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<Documento[]>(null, new HTTPResponseError(response.status, response.error))))
    );

  }

  async GetDocument(RowGuid : string | null){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization" : "Bearer " +  this.common.getCookie("Token")});
    let endpoint = this.ApiEndpoint.concat("GetDocument?Id=" + RowGuid );

    return this.http.get<DocumentoExt>(endpoint, {headers}).pipe(
      map(response => new Response<DocumentoExt>(response, new HTTPResponseError(200, "OK"))),
      catchError(response => of(new Response<DocumentoExt>(null, new HTTPResponseError(response.status, response.error))))
    );
  }

}
