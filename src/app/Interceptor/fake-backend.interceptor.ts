import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HTTPResponseError, Response } from '../Model/Base/Response';
import { User } from '../Model/User/User';
import { jwtDecode } from 'jwt-decode';
import { Abbonamento } from '../Model/Abbonamento/Abbonamento';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const { url, method, headers, body } = request;

        // Wrap in delayed observable to simulate server API call
        return of(null).pipe(mergeMap(handleRoute)).pipe(materialize()).pipe(delay(500)).pipe(dematerialize());

        function handleRoute() {

            
            const token = request.headers.get('authorization');

            if (token) {
                const decodedToken: any = jwtDecode(token);
                const currentTime = Math.floor(Date.now() / 1000);

                if (decodedToken.exp < currentTime) {
                    return unathorized();
                }
            }
            else{
                if(!url.toLowerCase().includes('authenticate'))
                    return unathorized();
            }

            switch (true) {
                case method === 'PUT' || method === 'POST':
                    return ok();
                case url.toLowerCase().includes('authenticate') && method === 'GET':
                    return authenticate();
                case url.toLowerCase().includes('getallusers') && method === 'GET':
                    return getUsers();
                case url.toLowerCase().includes('getuser?') && method === 'GET':
                    return getUser();
                case url.toLowerCase().includes('getusersubscriptions') && method === 'GET':
                    return GetUserSubscriptions();
                default:
                    // Pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // Route functions
        function authenticate() {
            let loginoutputAdmin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3N1cm5hbWUiOiJ0ZXN0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoidGVzdEB0ZXN0LnRlc3QiLCJDb2RGaXNjYWxlIjoidHN0dHN0OTNjMDZjNDE1bSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiZGJmZGJkOTAtOTY2Yy00NGM5LWIzMWMtMDk5ZTU2OTJiMzVhIiwiZXhwIjoxNzM1NTM4ODE2LCJpc3MiOiJpbyIsImF1ZCI6InZvaSJ9.FEg8kNZNRlHuM_FYbpgSz3EATXy21FmryUKaXmDpcIc";
            let loginoutputUser = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibHUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zdXJuYW1lIjoibG9jY2kiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJub2FkbWluQHRlc3QudGVzdCIsIkNvZEZpc2NhbGUiOiJsY2NsY3U5M2MwNmM0MTVtIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsInN1YiI6IjRiYjdkNWVmLTM0YWEtNGFkOS1hZDRiLTRmMTU4OTdjMzRjNCIsImV4cCI6MTczNTUzODg3OCwiaXNzIjoiaW8iLCJhdWQiOiJ2b2kifQ.-5CUdNSFV1ZE53lwREaC1eeuanfI8a7DFFnH4iinaTs";
            
            if(url.toLowerCase().includes("username=test@test.test") && url.toLowerCase().includes("password=test")){
                return of(new HttpResponse({ status: 200, body: loginoutputAdmin }));
            }

            if(url.toLowerCase().includes("username=noadmin@test.test") && url.toLowerCase().includes("password=noadmin")){
                return of(new HttpResponse({ status: 200, body: loginoutputUser }));

            }

            return of(new HttpResponse({ status: 200, body: { message: 'This is a fake response' } })).pipe(delay(500));
        }

        function unathorized(){
            return of(new HttpResponse({ status: 401, body: { message: 'Token Expired' } })).pipe(delay(500));
        }

        function getUsers() {
            let response: User[] = [
                {
                    nome: "lu",
                    cognome: "locci",
                    email: "noadmin@test.test",
                    codFiscale: "lcclcu93c06c415m",
                    password: "",
                    isAdmin: false,
                    rowGuid: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4",
                    dataNascita: new Date(),
                    via: null,
                    numero: null,
                    citta: null,
                    regione: null,
                    nazione: null,
                    consensoInvioMail: null,
                    abbonamenti: null
                },
                {
                    nome: "test",
                    cognome: "test",
                    email: "test@test.test",
                    codFiscale: "tsttst93c06c415m",
                    password: "",
                    isAdmin: true,
                    rowGuid: "dbfdbd90-966c-44c9-b31c-099e5692b35a",
                    dataNascita: new Date(),
                    via: null,
                    numero: null,
                    citta: null,
                    regione: null,
                    nazione: null,
                    consensoInvioMail: null,
                    abbonamenti: null
                },
                {
                    nome: "test1",
                    cognome: "test1",
                    email: "test1@test.test",
                    codFiscale: "test1",
                    password: "",
                    isAdmin: false,
                    rowGuid: "00000000-0000-0000-0000-000000000000",
                    dataNascita: new Date(),
                    via: null,
                    numero: null,
                    citta: null,
                    regione: null,
                    nazione: null,
                    consensoInvioMail: null,
                    abbonamenti: null
                },
                {
                    nome: "test",
                    cognome: "test",
                    email: "testcrea@test.test",
                    codFiscale: "test",
                    password: "",
                    isAdmin: false,
                    rowGuid: "7f466ad6-3252-4ab7-b1e9-254a1cbceead",
                    dataNascita: new Date(),
                    via: null,
                    numero: null,
                    citta: null,
                    regione: null,
                    nazione: null,
                    consensoInvioMail: null,
                    abbonamenti: null
                },
                {
                    nome: "test",
                    cognome: "test",
                    email: "testcrea2@test.test",
                    codFiscale: "test",
                    password: "",
                    isAdmin: false,
                    rowGuid: "dd0b3bc4-94e6-4353-9a31-d29ac454f9f2",
                    dataNascita: new Date(),
                    via: null,
                    numero: null,
                    citta: null,
                    regione: null,
                    nazione: null,
                    consensoInvioMail: null,
                    abbonamenti: null
                }
            ];

            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        } 

        function getUser(){
            let response: User = {
                nome: "lu",
                cognome: "locci",
                email: "noadmin@test.test",
                codFiscale: "lcclcu93c06c415m",
                password: "",
                isAdmin: false,
                rowGuid: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4",
                dataNascita: new Date("1993-03-06"),
                via: "friuli",
                numero: "18",
                citta: "lainate",
                regione: "lombardia",
                nazione: "italiana",
                consensoInvioMail: null,
                abbonamenti: [
                    {
                        id: 2,
                        idTipoAbbonamento: 0,
                        tipoAbbonamento: "Giornaliero",
                        dataIscrizione: new Date("2024-10-28"),
                        dataScadenza: new Date("2024-10-29"),
                        isActive: false,
                        utente: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
                    },
                    {
                        id: 4,
                        idTipoAbbonamento: 0,
                        tipoAbbonamento: "Mensile",
                        dataIscrizione: new Date("2024-11-01"),
                        dataScadenza: new Date("2024-11-30"),
                        isActive: false,
                        utente: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
                    }
                ]
            };
            
            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function GetUserSubscriptions(){
            let response: Abbonamento[] = [
                {
                    id: 4,
                    idTipoAbbonamento: 0,
                    tipoAbbonamento: "Mensile",
                    dataIscrizione: new Date("2024-11-01"),
                    dataScadenza: new Date("2024-11-30"),
                    isActive: false,
                    utente: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
                },
                {
                    id: 2,
                    idTipoAbbonamento: 0,
                    tipoAbbonamento: "Giornaliero",
                    dataIscrizione: new Date("2024-10-28"),
                    dataScadenza: new Date("2024-10-29"),
                    isActive: false,
                    utente: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
                },
                {
                    id : 5,
                    idTipoAbbonamento : 0,
                    dataIscrizione : new Date("2024-10-30"),
                    dataScadenza : new Date("2024-10-31"),
                    isActive : true,
                    tipoAbbonamento : "Giornaliero",
                    utente : "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
                }
            ];
            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function ok(){
            return of(new HttpResponse({ status: 200, body: true}) ).pipe(delay(500));
        }
    }
}

export const fakeBackendProvider = {
    // Use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
