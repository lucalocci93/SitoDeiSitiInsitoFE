import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HTTPResponseError, Response } from '../Model/Base/response';
import { User } from '../Model/User/User';
import { jwtDecode } from 'jwt-decode';
import { Abbonamento } from '../Model/Abbonamento/Abbonamento';
import { TipoDocumento } from '../Model/Documento/TipoDocumento';
import { Documento, DocumentoExt } from '../Model/Documento/Documento';
import { Evento } from '../Model/Evento/Evento';
import { Categoria } from '../Model/Evento/Categoria';
import { Pages } from '../Interface/Pagine';
import { Graphics } from '../Model/Sito/Grafica';
import { Video } from '../Model/Sito/Video';
import { Redirection } from '../Model/Sito/Redirezioni';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const { url, method, headers, body } = request;

        // Wrap in delayed observable to simulate server API call
        return of(null).pipe(mergeMap(handleRoute)).pipe(materialize()).pipe(delay(500)).pipe(dematerialize());

        function handleRoute() {

            
            const token = request.headers.get('authorization');

            //if (token) {
            //    const decodedToken: any = jwtDecode(token);
            //    const currentTime = Math.floor(Date.now() / 1000);

            //    if (decodedToken.exp < currentTime) {
            //        return unathorized();
            //    }
            //}
            //else{
            //    if(!url.toLowerCase().includes('authenticate'))
            //        return unathorized();
            //}

            switch (true) {
                //case method === 'PUT' || method === 'POST':
                //    return ok();
                case url.toLowerCase().includes('authenticate') && method === 'GET':
                    return authenticate();
                case url.toLowerCase().includes('getallusers') && method === 'GET':
                    return getUsers();
                case url.toLowerCase().includes('getuser?') && method === 'GET':
                    return getUser();
                case url.toLowerCase().includes('getusersubscriptions') && method === 'GET':
                    return GetUserSubscriptions();
                case url.toLowerCase().includes('getdocumenttype') && method === 'GET':
                    return GetDocumentType();
                case url.toLowerCase().includes('getuserdocuments') && method === 'GET':
                    return GetUserDocuments();
                case url.toLowerCase().includes('getdocument') && method === 'GET':
                    return GetDocument();
                case url.toLowerCase().includes('getevents') && method === 'GET':
                    return GetEvents();
                case url.toLowerCase().includes('getcategories') && method === 'GET':
                    return GetCategories();
                case url.toLowerCase().includes('getpagine') && method === 'GET':
                    return GetPages();
                case url.toLowerCase().includes('bypagina?pagina=1') && method === 'GET':
                    return GetImages();
                case url.toLowerCase().includes('bypagina?pagina=3') && method === 'GET':
                    return GetNews();
                case url.toLowerCase().includes('getgrafiche') && method === 'GET':
                    return GetGrafiche();
                case url.toLowerCase().includes('getvideo') && method === 'GET':
                    return GetVideo();
                case url.toLowerCase().includes('getredirezioni') && method === 'GET':
                    return GetRedirezioni()
                default:
                    // Pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // Route functions
        function authenticate() {
            let loginoutputAdmin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3N1cm5hbWUiOiJ0ZXN0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoidGVzdEB0ZXN0LnRlc3QiLCJDb2RGaXNjYWxlIjoidHN0dHN0OTNjMDZjNDE1bSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiZGJmZGJkOTAtOTY2Yy00NGM5LWIzMWMtMDk5ZTU2OTJiMzVhIiwiZXhwIjoyNzM1NTM4ODE2LCJpc3MiOiJpbyIsImF1ZCI6InZvaSJ9.c0YoVEzSAPAlX4RXfe7oYf98F6cvZwKYLdxHmTveMiQ";
            let loginoutputUser = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibHUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zdXJuYW1lIjoibG9jY2kiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJub2FkbWluQHRlc3QudGVzdCIsIkNvZEZpc2NhbGUiOiJsY2NsY3U5M2MwNmM0MTVtIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsInN1YiI6IjRiYjdkNWVmLTM0YWEtNGFkOS1hZDRiLTRmMTU4OTdjMzRjNCIsImV4cCI6MjczNTUzODg3OCwiaXNzIjoiaW8iLCJhdWQiOiJ2b2kifQ.ZqXcJTPV_Vd1u1hZQDW0mrVDRBQlcL9yXdAmiRz_t8g";
            
            if(url.toLowerCase().includes("username=test@test.test")
                 && url.toLowerCase().includes("password=9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08")){
                return of(new HttpResponse({ status: 200, body: {success:true, data: {token:loginoutputAdmin}} }));
            }

            if(url.toLowerCase().includes("username=noadmin@test.test") 
                && url.toLowerCase().includes("password=fbe03dc7f00d059debe445169f331bba6d217008c91a6e98678556eef11ed85a")){
                return of(new HttpResponse({ status: 200, body: {success:true, data: {token:loginoutputUser}} }));

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
                        urlPagamento: "test_test.test",
                        importo: 10,
                        idCheckout: "",    
                        isActive: false,
                        isPayed: false,
                        utente: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
                    },
                    {
                        id: 4,
                        idTipoAbbonamento: 0,
                        tipoAbbonamento: "Mensile",
                        dataIscrizione: new Date("2024-11-01"),
                        dataScadenza: new Date("2024-11-30"),
                        urlPagamento: "test1_test.test",
                        importo: 10,
                        idCheckout: "",    
                        isActive: false,
                        isPayed: false,
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
                    urlPagamento: "test_test.test",
                    importo: 10,
                    idCheckout: "",
                    isActive: false,
                    isPayed: false,
                    utente: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
                },
                {
                    id: 2,
                    idTipoAbbonamento: 0,
                    tipoAbbonamento: "Giornaliero",
                    dataIscrizione: new Date("2024-10-28"),
                    dataScadenza: new Date("2024-10-29"),
                    urlPagamento: "test1_test.test",
                    importo: 10,
                    idCheckout: "",
                    isActive: false,
                    isPayed: false,
                    utente: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
                },
                {
                    id : 5,
                    idTipoAbbonamento : 0,
                    dataIscrizione : new Date("2024-10-30"),
                    dataScadenza : new Date("2024-10-31"),
                    urlPagamento: "test2_test.test",
                    importo: 10,
                    idCheckout: "",
                    isActive : true,
                    isPayed: true,
                    tipoAbbonamento : "Giornaliero",
                    utente : "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
                }
            ];
            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function GetDocumentType(){
            let response : TipoDocumento[] = [
                {
                    "id": 1,
                    "descrizione": "Ricevuta"
                },
                {
                    "id": 2,
                    "descrizione": "Attestato Partecipazione"
                }
            ];
            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function GetUserDocuments(){
            let response : Documento[] = [
                {
                    idDocumento: "30f51dca-6654-4f00-8b74-f81750583097",
                    idTipoDocumento: 1,
                    nomeDocumento: "test1",
                    dataCaricamento: new Date("2024-12-29")
                },
                {
                    idDocumento: "4edfff28-1263-4614-8f92-03f132e1ce8e",
                    idTipoDocumento: 1,
                    nomeDocumento: "prova2",
                    dataCaricamento: new Date("2024-11-24")
                }
            ];
            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function GetDocument(){
            let response : DocumentoExt = {
                rowGuid: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4",
                datiDocumento: "JVBERi0xLjQNCiX5+prnDQoxMCAwIG9iag0KPDwKL0UgMTUyMTkKL0ggWzEzMTIgMTY4XQovTCAyNzc4OAovTGluZWFyaXplZCAxCi9OIDMKL08gMTMKL1QgMjc1MzkKPj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQplbmRvYmoNCg0KeHJlZg0KMTAgMTMNCjAwMDAwMDAwMTcgMDAwMDAgbg0KMDAwMDAwMTE5NiAwMDAwMCBuDQowMDAwMDAxMzEyIDAwMDAwIG4NCjAwMDAwMDE0ODAgMDAwMDAgbg0KMDAwMDAwMTcyNiAwMDAwMCBuDQowMDAwMDAxNzgyIDAwMDAwIG4NCjAwMDAwMDE5NTkgMDAwMDAgbg0KMDAwMDAwMzA5NCAwMDAwMCBuDQowMDAwMDAzMTUwIDAwMDAwIG4NCjAwMDAwMDMyNTcgMDAwMDAgbg0KMDAwMDAwNTYwMSAwMDAwMCBuDQowMDAwMDA3Njc4IDAwMDAwIG4NCjAwMDAwMDk4NTcgMDAwMDAgbg0KdHJhaWxlcg0KPDwKL0FCQ3BkZiA5MTI1Ci9JRCBbPDI5RTI5NDRDOTZCRTYyMzA5MjFEMTEwNUFDMDJCMzVFPgo8Q0I4OENDM0FBNzhDQjYzMTFBMTUyRDI0NUQ3OTQ1Mjk+XQovSW5mbyA5IDAgUgovUHJldiAyNzUyOAovUm9vdCAxMSAwIFIKL1NpemUgMjMKL1NvdXJjZSAoV2VKWEZ4Tk80ZkpkdXlVTWV0VGNQOStvYU9OZklOTjQrZDdoL3Ird0FHb3l6MDNESmkzMWNkRVpBMzV5MDBGcEI5a2hnbThWdENGbXlkOGdJcndPalFSQUlqUHNXaE00dmdNQ1ZcDQo4S3ZWRi9LOGxmNzBjZ1JiYkhlUlZHcWRHd2tRNzlhZU5oVHdEWTNHRWc9KQo+PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIA0Kc3RhcnR4cmVmDQowDQolJUVPRg0KDQoxMSAwIG9iag0KPDwKL09wZW5BY3Rpb24gWzEzIDAgUgovRml0XQovT3V0bGluZXMgNyAwIFIKL1BhZ2VNb2RlIC9Vc2VOb25lCi9QYWdlcyA4IDAgUgovVHlwZSAvQ2F0YWxvZwo+Pg0KZW5kb2JqDQoNCjEyIDAgb2JqDQo8PAovRmlsdGVyIC9GbGF0ZURlY29kZQovTGVuZ3RoIDgyCi9TIDg0Cj4+DQpzdHJlYW0NCnicY2BgYGZgYFVgUGBgEFcDkXCgAIUpQDY7QliulYGBkYsBA6CLs8oDCS4oZmCwAJu9DypZycDAYg5lGzMwcHwAWvEUSHszMIjsgpkAANwlCCcNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjEzIDAgb2JqDQo8PAovQ29udGVudHMgWzE4IDAgUl0KL0dyb3VwIDw8Ci9DUyAvRGV2aWNlUkdCCi9TIC9UcmFuc3BhcmVuY3kKL1R5cGUgL0dyb3VwCj4+Ci9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9QYXJlbnQgOCAwIFIKL1Jlc291cmNlcyA8PAovUHJvY1NldCBbL1BERgovVGV4dAovSW1hZ2VCCi9JbWFnZUMKL0ltYWdlSV0KL1hPYmplY3QgPDwKL0lhYmM0IDIyIDAgUgo+Pgo+PgovVHlwZSAvUGFnZQo+Pg0KZW5kb2JqDQoNCjE0IDAgb2JqDQo8PAovQ0EgMQovVHlwZSAvRXh0R1N0YXRlCi9jYSAxCj4+DQplbmRvYmoNCg0KMTUgMCBvYmoNCjw8Ci9Bc2NlbnQgMTA3OQovQ2FwSGVpZ2h0IDcwMAovRGVzY2VudCAtMjUxCi9GbGFncyAzMgovRm9udEJCb3ggWy01NzIgLTQxMSAxOTk5IDEyOThdCi9Gb250TmFtZSAvU2Vnb2VVSQovSXRhbGljQW5nbGUgMAovU3RlbVYgODAKL1R5cGUgL0ZvbnREZXNjcmlwdG9yCj4+DQplbmRvYmoNCg0KMTYgMCBvYmoNCjw8Ci9CYXNlRm9udCAvU2Vnb2VVSQovRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZwovRmlyc3RDaGFyIDAKL0ZvbnREZXNjcmlwdG9yIDE1IDAgUgovTGFzdENoYXIgMjU1Ci9TdWJ0eXBlIC9UcnVlVHlwZQovVHlwZSAvRm9udAovV2lkdGhzIFswIDAgMCAwIDAgMCAwIDAgMCAyNzMKMjczIDI3MyAyNzMgOTcgMCAwIDAgMCAwIDAKMCAwIDAgMCAwIDAgMCAwIDAgMAowIDAgMjczIDI4NCAzOTIgNTkwIDUzOSA4MTggODAwIDIyOQozMDEgMzAxIDQxNiA2ODQgMjE2IDM5OSAyMTYgMzg5IDUzOSA1MzkKNTM5IDUzOSA1MzkgNTM5IDUzOSA1MzkgNTM5IDUzOSAyMTYgMjE2CjY4NCA2ODQgNjg0IDQ0OCA5NTUgNjQ1IDU3MyA2MTkgNzAxIDUwNQo0ODggNjg2IDcwOSAyNjYgMzU2IDU4MCA0NzAgODk3IDc0OCA3NTMKNTYwIDc1MyA1OTggNTMxIDUyMyA2ODcgNjIxIDkzNCA1ODkgNTUyCjU3MCAzMDEgMzc4IDMwMSA2ODQgNDE1IDI2OCA1MDggNTg3IDQ2MQo1ODggNTIyIDMxMiA1ODggNTY1IDI0MiAyNDIgNDk3IDI0MiA4NjEKNTY1IDU4NSA1ODcgNTg4IDM0NyA0MjQgMzM4IDU2NSA0NzkgNzIyCjQ1OCA0ODMgNDUyIDMwMSAyMzkgMzAxIDY4NCA0MDYgNTM5IDQwNgoyMjkgNTM5IDM3NiA3MzIgMzc1IDM3NSAzNzEgMTIwOSA1MzEgMzE1CjkzMCA0MDYgNTcwIDQwNiA0MDYgMjI5IDIyOSAzNzYgMzc2IDQwNgo1MDAgMTAwMCAzMzYgNzcyIDQyNCAzMTUgOTI3IDQwNiA0NTIgNTUyCjI3MyAy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",
                idDocumento: "30f51dca-6654-4f00-8b74-f81750583097",
                idTipoDocumento: 0,
                nomeDocumento: "test1",
                dataCaricamento: new Date(2024-12-29)
            };

            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function GetEvents(){
            let response : Evento[] = [
                {
                    id: "3c52b178-80ec-46a9-a203-08dd34e22069",
                    copertina: {
                        ImageData: "",
                        ContentType: "image/jpeg"
                    },
                    nomeEvento: "test1upd",
                    dataInizioEvento: new Date("2025-1-31"),
                    dataFineEvento: new Date("2025-2-2"),
                    luogoEvento: "qui",
                    categorie: [
                        {
                            Id: 1,
                            Descrizione: "U16"
                        },
                        {
                            Id: 4,
                            Descrizione: "JUNIOR"
                        },
                        {
                            Id: 5,
                            Descrizione: "SENIOR"
                        },
                        {
                            Id: 7,
                            Descrizione: "OVER65"
                        }
                    ],
                    descrizione: "testdescr",
                    link: "pippo;pippa"
                },
                {
                    id: "be907da0-d4b7-4595-42d7-08dd35463392",
                    copertina : {
                        ImageData: "",
                        ContentType: "image/jpeg"
                    },
                    nomeEvento: "test2",
                    dataInizioEvento: new Date("2025-1-31"),
                    dataFineEvento: new Date("2025-2-2"),
                    luogoEvento: "qui",
                    categorie: [
                        {
                            Id: 1,
                            Descrizione: "U16"
                        },
                        {
                            Id: 2,
                            Descrizione: "U18"
                        },
                        {
                            Id: 3,
                            Descrizione: "U21"
                        },
                        {
                            Id: 4,
                            Descrizione: "JUNIOR"
                        }
                    ],
                    descrizione: "descr",
                    link: "pippo;pippa::::"
                },
                {
                    id: "110d9ade-219a-47a5-0104-08dd38d35768",
                    copertina: {
                        ImageData: "",
                        ContentType: "image/jpeg"
                    },
                    nomeEvento: "past",
                    dataInizioEvento: new Date("2024-12-30"),
                    dataFineEvento: new Date("2025-1-5"),
                    luogoEvento: "semprequi",
                    categorie: [
                        {
                            Id: 4,
                            Descrizione: "JUNIOR"
                        }
                    ],
                    descrizione: "b",
                    link: "aaaaa"
                }
            ];
            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function GetCategories(){
            let response : Categoria[] = [
                {
                    Id: 1,
                    Descrizione: "U16"
                },
                {
                    Id: 2,
                    Descrizione: "U18"
                },
                {
                    Id: 3,
                    Descrizione: "U21"
                },
                {
                    Id: 4,
                    Descrizione: "JUNIOR"
                },
                {
                    Id: 5,
                    Descrizione: "SENIOR"
                },
                {
                    Id: 6,
                    Descrizione: "OVER50"
                },
                {
                    Id: 7,
                    Descrizione: "OVER65"
                }
            ];
            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function GetPages(){
            let response : Pages[] = [{id:1,page:"Homepage"},{id:2,page:"Contatti"}];
            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function GetImagesByPage(){
            let response : Graphics[] = [
                {
                    id: 3,
                    urlImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
                    page: 1,
                    section: 1,
                    urlFromGoogleDrive: false,
                    title: "Expert Trainers",
                    description: "Get personalized workout plans tailored to your goals",
                    additionalText: "Meet Our Trainers",
                    isAdditionalTextMarkdown: false,
                    order: 2,
                    active: true
                },
                {
                    id: 4,
                    urlImage: "",
                    page: 1,
                    section: 3,
                    urlFromGoogleDrive: false,
                    title: "Basic",
                    description: "$29/month",
                    additionalText: " Full gym access 24/7, All equipment access,  Unlimited group classes, One personal training session/month",
                    isAdditionalTextMarkdown: false,
                    order: 1,
                    active: true
                },
                {
                    id: 5,
                    urlImage: "",
                    page: 1,
                    section: 3,
                    urlFromGoogleDrive: false,
                    title: "Elite",
                    description: "$99/month",
                    additionalText: "All Premium features, Weekly personal training, Custom nutrition plan, Spa access",
                    isAdditionalTextMarkdown: false,
                    order: 3,
                    active: true
                },
                {
                    id: 6,
                    urlImage: "",
                    page: 1,
                    section: 3,
                    urlFromGoogleDrive: false,
                    title: "Premium",
                    description: "$59/month",
                    additionalText: "Full gym access 24/7, All equipment access, Unlimited group classes, One personal training session/month",
                    isAdditionalTextMarkdown: false,
                    order: 2,
                    active: true
                }
            ];
            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function GetImages(){
            let response : Graphics[] = [
                {
                    "id": 1,
                    "urlImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
                    "page": 1,
                    "section": 1,
                    "urlFromGoogleDrive": false,
                    "title": "Expert Trainers",
                    "description": "Get personalized workout plans tailored to your goals",
                    "additionalText": "Meet Our Trainers",
                    "isAdditionalTextMarkdown": false,
                    "order": 1,
                    "active": true
                },
                {
                    "id": 2,
                    "urlImage": "https://drive.google.com/file/d/1uRx8iJu6Wck9Xj2SnlgMmsJkqPUpAM5O/view?usp=drive_link",
                    "page": 1,
                    "section": 1,
                    "urlFromGoogleDrive": true,
                    "title": "test",
                    "description": "test da google",
                    "additionalText": "drive",
                    "isAdditionalTextMarkdown": false,
                    "order": 2,
                    "active": true
                },
                {
                    "id": 1,
                    "urlImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
                    "page": 1,
                    "section": 3,
                    "urlFromGoogleDrive": false,
                    "title": "Expert Trainers",
                    "description": "Get personalized workout plans tailored to your goals",
                    "additionalText": "Meet Our Trainers",
                    "isAdditionalTextMarkdown": false,
                    "order": 1,
                    "active": true
                },
                {
                    "id": 2,
                    "urlImage": "https://drive.google.com/file/d/1uRx8iJu6Wck9Xj2SnlgMmsJkqPUpAM5O/view?usp=drive_link",
                    "page": 1,
                    "section": 3,
                    "urlFromGoogleDrive": true,
                    "title": "test",
                    "description": "test da google",
                    "additionalText": "drive",
                    "isAdditionalTextMarkdown": false,
                    "order": 2,
                    "active": true
                },
                {
                    "id": 1,
                    "urlImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
                    "page": 1,
                    "section": 5,
                    "urlFromGoogleDrive": false,
                    "title": "Expert Trainers",
                    "description": "Get personalized workout plans tailored to your goals",
                    "additionalText": "Meet Our Trainers",
                    "isAdditionalTextMarkdown": false,
                    "order": 1,
                    "active": true
                },
                {
                    "id": 2,
                    "urlImage": "https://drive.google.com/file/d/1uRx8iJu6Wck9Xj2SnlgMmsJkqPUpAM5O/view?usp=drive_link",
                    "page": 1,
                    "section": 5,
                    "urlFromGoogleDrive": true,
                    "title": "test",
                    "description": "test da google",
                    "additionalText": "drive",
                    "isAdditionalTextMarkdown": false,
                    "order": 2,
                    "active": true
                },
                {
                    "id": 3,
                    "urlImage": "",
                    "page": 1,
                    "section": 6,
                    "urlFromGoogleDrive": false,
                    "title": "Basic",
                    "description": "$29/month",
                    "additionalText": "Full gym access 24/7, All equipment access,  Unlimited group classes, One personal training session/month",
                    "isAdditionalTextMarkdown": false,
                    "order": 1,
                    "active": true
                },
                {
                    "id": 4,
                    "urlImage": "",
                    "page": 1,
                    "section": 6,
                    "urlFromGoogleDrive": false,
                    "title": "Elite",
                    "description": "$99/month",
                    "additionalText": "All Premium features, Weekly personal training, Custom nutrition plan, Spa access",
                    "isAdditionalTextMarkdown": false,
                    "order": 2,
                    "active": true
                },
                {
                    "id": 5,
                    "urlImage": "",
                    "page": 1,
                    "section": 6,
                    "urlFromGoogleDrive": false,
                    "title": "Premium",
                    "description": "$59/month",
                    "additionalText": "Full gym access 24/7, All equipment access, Unlimited group classes, One personal training session/month",
                    "isAdditionalTextMarkdown": false,
                    "order": 1,
                    "active": true
                },
                                {
                    "id": 6,
                    "urlImage": "",
                    "page": 1,
                    "section": 2,
                    "urlFromGoogleDrive": false,
                    "title": "",
                    "description": "esempio descrizione della sezione chi siamo",
                    "additionalText": "",
                    "isAdditionalTextMarkdown": false,
                    "order": 1,
                    "active": true
                },
                {
                    "id": 7,
                    "urlImage": "",
                    "page": 1,
                    "section": 4,
                    "urlFromGoogleDrive": false,
                    "title": "💪",
                    "description": "Personal Training",
                    "additionalText": "One-on-one sessions with certified trainers customized to your needs",
                    "isAdditionalTextMarkdown": false,
                    "order": 1,
                    "active": true
                },
                {
                    "id": 8,
                    "urlImage": "",
                    "page": 1,
                    "section": 4,
                    "urlFromGoogleDrive": false,
                    "title": "🕒",
                    "description": "24/7 Access",
                    "additionalText": "Work out on your schedule with round-the-clock facility access",
                    "isAdditionalTextMarkdown": false,
                    "order": 2,
                    "active": true
                },
                {
                    "id": 9,
                    "urlImage": "",
                    "page": 1,
                    "section": 4,
                    "urlFromGoogleDrive": false,
                    "title": "👥",
                    "description": "Group Classes",
                    "additionalText": "Join our energetic group workouts with expert instructors",
                    "isAdditionalTextMarkdown": false,
                    "order": 3,
                    "active": true
                },
                                {
                    "id": 9,
                    "urlImage": "",
                    "page": 1,
                    "section": 4,
                    "urlFromGoogleDrive": false,
                    "title": "🥗",
                    "description": "Nutrition Plans",
                    "additionalText": "Custom meal plans designed to help you reach your fitness goals",
                    "isAdditionalTextMarkdown": false,
                    "order": 4,
                    "active": true
                }

        ];
            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function GetNews(){
            let response : Graphics[] = [
            {
                "id": 6,
                "urlImage": "",
                "page": 3,
                "section": 1,
                "urlFromGoogleDrive": false,
                "title": "",
                "description": "",
                "additionalText": "# \uD83C\uDFCB️‍♂️ Nuova Apertura della Palestra FitLife! \uD83C\uDFCB️‍♀️\r\n\r\n<img src=\"https://logos-world.net/wp-content/uploads/2023/05/Golds-Gym-Logo-1965.png\" alt=\"FitLife logo\" title=\"logo\" width=\"50%\" height=\"30%\" />\r\n\r\nSiamo entusiasti di annunciare l'apertura della nostra nuova palestra, **FitLife**, nel cuore della città! \uD83C\uDF89\r\n\r\n## Cosa Offriamo:\r\n- **Attrezzature all'avanguardia**: Le migliori macchine e pesi per ogni tipo di allenamento.\r\n- **Corsi di gruppo**: Yoga, Pilates, Zumba e molto altro.\r\n- **Personal Trainer**: Professionisti qualificati per aiutarti a raggiungere i tuoi obiettivi.\r\n- **Orari flessibili**: Aperto 24/7 per adattarsi al tuo stile di vita.\r\n\r\n## Offerta di Benvenuto:\r\nIscriviti entro la fine del mese e ricevi uno **sconto del 20%** sul tuo primo abbonamento! Non perdere questa occasione per iniziare il tuo percorso di fitness con noi.\r\n\r\n\uD83D\uDCCD **Indirizzo**: Via Roma 123, Città\r\n\uD83D\uDCDE **Contatti**: 0123-456789\r\n\uD83C\uDF10 **Sito Web**: [www.fitlifecom](#eni a trovarci e scopri come FitLife può trasformare la tua vita! \uD83D\uDCAA\r\n",
                "isAdditionalTextMarkdown": true,
                "order": 1,
                "active": true
            },
            ]

            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function GetVideo(){
            let response : Video[] = [
                {
                    "id": 2,
                    "url": "https://www.youtube.com/watch?v=S1yszOtBW4w&list=PLP5MAKLy8lP-x-Ust2YGwspgt4wMJBFXJ",
                    "title": "test",
                    "description": "test video",
                    "provider": null,
                    "active": true
                },
                {
                    "id": 3,
                    "url": "https://www.youtube.com/watch?v=2Sa5jpD-3pU&list=PLP5MAKLy8lP-x-Ust2YGwspgt4wMJBFXJ&index=2",
                    "title": "2 video",
                    "description": "secondo video",
                    "provider": null,
                    "active": true
                }
            ];
            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function GetGrafiche(){
            let response : Graphics[] =
                [
    {
        "id": 1,
        "urlImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
        "page": 1,
        "section": 1,
        "urlFromGoogleDrive": false,
        "title": "Expert Trainers",
        "description": "Get personalized workout plans tailored to your goals",
        "additionalText": "Meet Our Trainers",
        "isAdditionalTextMarkdown": false,
        "order": 1,
        "active": true
    },
    {
        "id": 2,
        "urlImage": "https://drive.google.com/file/d/1uRx8iJu6Wck9Xj2SnlgMmsJkqPUpAM5O/view?usp=drive_link",
        "page": 1,
        "section": 1,
        "urlFromGoogleDrive": true,
        "title": "test",
        "description": "test da google",
        "additionalText": "drive",
        "isAdditionalTextMarkdown": false,
        "order": 2,
        "active": true
    },
    {
        "id": 3,
        "urlImage": "",
        "page": 1,
        "section": 3,
        "urlFromGoogleDrive": false,
        "title": "Basic",
        "description": "$29/month",
        "additionalText": "Full gym access 24/7, All equipment access,  Unlimited group classes, One personal training session/month",
        "isAdditionalTextMarkdown": false,
        "order": 1,
        "active": true
    },
    {
        "id": 4,
        "urlImage": "",
        "page": 1,
        "section": 3,
        "urlFromGoogleDrive": false,
        "title": "Elite",
        "description": "$99/month",
        "additionalText": "All Premium features, Weekly personal training, Custom nutrition plan, Spa access",
        "isAdditionalTextMarkdown": false,
        "order": 2,
        "active": true
    },
    {
        "id": 5,
        "urlImage": "",
        "page": 1,
        "section": 3,
        "urlFromGoogleDrive": false,
        "title": "Premium",
        "description": "$59/month",
        "additionalText": "Full gym access 24/7, All equipment access, Unlimited group classes, One personal training session/month",
        "isAdditionalTextMarkdown": false,
        "order": 1,
        "active": true
    },
    {
        "id": 6,
        "urlImage": "",
        "page": 3,
        "section": 1,
        "urlFromGoogleDrive": false,
        "title": "",
        "description": "",
        "additionalText": "# \uD83C\uDFCB️‍♂️ Nuova Apertura della Palestra FitLife! \uD83C\uDFCB️‍♀️\r\n\r\n<img src=\"https://logos-world.net/wp-content/uploads/2023/05/Golds-Gym-Logo-1965.png\" alt=\"FitLife logo\" title=\"logo\" width=\"50%\" height=\"30%\" />\r\n\r\nSiamo entusiasti di annunciare l'apertura della nostra nuova palestra, **FitLife**, nel cuore della città! \uD83C\uDF89\r\n\r\n## Cosa Offriamo:\r\n- **Attrezzature all'avanguardia**: Le migliori macchine e pesi per ogni tipo di allenamento.\r\n- **Corsi di gruppo**: Yoga, Pilates, Zumba e molto altro.\r\n- **Personal Trainer**: Professionisti qualificati per aiutarti a raggiungere i tuoi obiettivi.\r\n- **Orari flessibili**: Aperto 24/7 per adattarsi al tuo stile di vita.\r\n\r\n## Offerta di Benvenuto:\r\nIscriviti entro la fine del mese e ricevi uno **sconto del 20%** sul tuo primo abbonamento! Non perdere questa occasione per iniziare il tuo percorso di fitness con noi.\r\n\r\n\uD83D\uDCCD **Indirizzo**: Via Roma 123, Città\r\n\uD83D\uDCDE **Contatti**: 0123-456789\r\n\uD83C\uDF10 **Sito Web**: [www.fitlifecom](#eni a trovarci e scopri come FitLife può trasformare la tua vita! \uD83D\uDCAA\r\n",
        "isAdditionalTextMarkdown": true,
        "order": 1,
        "active": true
    }
]
            return of(new HttpResponse({ status: 200, body: response}) ).pipe(delay(500));
        }

        function GetRedirezioni(){
            let response : Redirection[] = 
                [
                {
                    "id": 1,
                    "url": "https://www.youtube.com/",
                    "redirectUrl": "https://localhost:7278/redirect?Id=1",
                    "active": false
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
