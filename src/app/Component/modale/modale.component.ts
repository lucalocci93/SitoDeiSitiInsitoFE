import { HttpStatusCode } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { eventData, ModalData, subscribeData, userData } from 'src/app/Interface/modal-data';
import { Operation, SubscriptionOperation } from 'src/app/Model/Base/enum';
import { Abbonamento } from 'src/app/Model/Abbonamento/Abbonamento';
import { User } from 'src/app/Model/User/User';
import { AbbonamentiService } from 'src/Services/Abbonamenti/abbonamenti.service';
import { UtentiService } from 'src/Services/Utenti/utenti.service';
import { TipoAbbonamento } from 'src/app/Model/Abbonamento/tipo-abbonamento';
import { TipoDocumento } from 'src/app/Model/Documento/TipoDocumento';
import { DocumentiService } from 'src/Services/Documenti/documenti.service';
import { CommonService } from 'src/Services/Common/common.service';
import { Documento, DocumentoExt } from 'src/app/Model/Documento/Documento';
import { Categoria } from 'src/app/Model/Evento/Categoria';
import { EventiService } from 'src/Services/Eventi/eventi.service';
import { Evento } from 'src/app/Model/Evento/Evento';
import { DatePipe, formatDate } from '@angular/common';
import { Iscrizione } from 'src/app/Model/Evento/Iscrizione';
import { Competitors } from 'src/app/Interface/Competitors';
import { Router } from '@angular/router';
import { SitoService } from 'src/Services/Sito/sito.service';
import { Pages } from 'src/app/Interface/Pagine';
import { Graphics } from 'src/app/Model/Sito/Grafica';
import { Redirection } from 'src/app/Model/Sito/Redirezioni';
import { Video } from 'src/app/Model/Sito/Video';
import { Competition } from 'src/app/Model/Evento/Competition';
import { Organizzazioni } from 'src/app/Interface/User/Organizzazioni';
import { Cinture } from 'src/app/Interface/User/Cinture';
import { C } from 'node_modules/@angular/cdk/portal-directives.d-DbeNrI5D';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css'],
  standalone: false
})
export class ModaleComponent implements OnInit {
  
  user : User | undefined;
  Organizations : Organizzazioni[] = [];
  Belts: Cinture[] = [];

  subscription : Abbonamento | undefined;
  subList : Abbonamento[] = [];
  subType : TipoAbbonamento[] = [];

  docType : TipoDocumento[] = [];
  document : Document | undefined;
  documents : Documento[] = [];

  DataEvent : Evento | undefined;
  CategoriesData : Categoria[] = [];
  Competitors: Competitors[] = [];

  Pages: Pages[] = [];

  selected: number[] = [];

  redirezione: Redirection | undefined;

  gare: Competition[] = [];
  eventId: string | undefined | null;

  UserForm: FormGroup;
  SubForm: FormGroup;
  DocForm: FormGroup;
  EventForm : FormGroup;
  ImageForm : FormGroup;
  CompetitionForm : FormGroup;

  SubdisplayedColumns: string[] = ['Tipo', 'Inizio', 'Scadenza', "Pagato", "Azioni"];
  DocumentdisplayedColumns: string[] = ['Tipo', 'Nome', 'Data', "Azioni"];
  CompetitiondisplayedColumns: string[] = ['Gara', 'Categoria', "Importo", "Azioni"];

  dataSource = new MatTableDataSource(this.subList);

  fileName: string = "";

  datePipe: DatePipe = new DatePipe('en-GB');

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    public dialogRef: MatDialogRef<ModaleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData<any>,
    private commonService: CommonService,
    private userService: UtentiService,
    private subService: AbbonamentiService,
    private docService: DocumentiService,
    private eventService : EventiService,
    private sitoService : SitoService,
    private fb: FormBuilder,
    private router: Router
  ) {

    this.UserForm = this.fb.group({
      Nome: ['', Validators.required],
      Cognome: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      CodFiscale: ['', Validators.required],
      DataNascita: [new Date(), Validators.required],
      Via: ['', Validators.required],
      Numero: ['', Validators.required],
      Citta: ['', Validators.required],
      Regione: ['', Validators.required],
      Nazione: ['', Validators.required],
      RowGuid:[],
      Organizzazione: ['', Validators.required],
      Cintura: ['', Validators.required]
    });

    this.SubForm = this.fb.group({
      IdTipoAbbonamento: [3, Validators.required],
      DataInizio: [new Date(), Validators.required],
      DataFine: [new Date(), Validators.required],
      UrlPagamento: [""],
      Importo:[0],
      Utente: []
    });

    this.DocForm = this.fb.group({
      IdTipoDocumento: [1, Validators.required],
      Documento: ['', Validators.required]
    })

    this.EventForm = this.fb.group({
      IdEvento: [""],
      NomeEvento: ['', Validators.required],
      DataInizio: [new Date(), Validators.required],
      DataFine: [new Date(), Validators.required],
      LuogoEvento: ['', Validators.required],
      DescrEvento: [''],
      EventSubAmount: [0,],
      EventEndSubDate: [new Date()],
      //LinkEvento: [''],
      //CatEvento: this.fb.array(this.CategoriesData.map(() => false))
    });

    this.ImageForm = this.fb.group({
      UrlImage: ['', Validators.required],
      Pagina: ['', Validators.required],
      Sezione: ['', Validators.required],
      UrldaGoogleDrive:[ false, Validators.required],
      Titolo: ['', Validators.required],
      Descrizione: ['', Validators.required],
      TestoAzione: ['', Validators.required]
    });

    this.CompetitionForm = this.fb.group({
      Event: [''],
      NomeGara: [''],
      CategoriaGara: [''],
      ImportoIscrizione: [0],
    });
  }
    
  async ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    if(this.data.type === 'Info')
      {
        this.userService.GetCinture().subscribe(data => {
          if(data != null && data.Data != null){
            this.Belts = data.Data;
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              this.router.navigate(['/login']);
            }
            else{
              alert("Errore recupero Cinture");
              this.dialogRef.close();
            }
          }
        });

        this.userService.GetOrganizzazioni().subscribe(data => {
          if(data != null && data.Data != null){
            this.Organizations = data.Data;
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              this.router.navigate(['/login']);
            }
            else{
              alert("Errore recupero Organizzazioni");
              this.dialogRef.close();
            }
          }
        });

        this.user = undefined;
        let userData = this.data.object as userData;
        this.userService.GetUtente(userData.rowGuid).subscribe(data => {
          if(data != null && data.Data != null){
            this.UserForm.setValue({
              Nome: data.Data.nome,
              Cognome: data.Data.cognome,
              Email: data.Data.email,
              CodFiscale: data.Data.codFiscale,
              DataNascita: data.Data.dataNascita,
              Via: data.Data.via,
              Numero: data.Data.numero,
              Citta: data.Data.citta,
              Regione: data.Data.regione,
              Nazione: data.Data.nazione,
              RowGuid: data.Data.rowGuid,
              Organizzazione: data.Data.organizzazione,
              Cintura: data.Data.cintura?.toString()
            }); 

            this.UserForm.disable();
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              this.router.navigate(['/login']);
            }
            else{
              alert("Errore recupero Utenti");
              this.dialogRef.close();
            }
          }
        });
      }
      
    if(this.data.type === 'updateInfo')
      {
        this.userService.GetCinture().subscribe(data => {
          if(data != null && data.Data != null){
            this.Belts = data.Data;
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              this.router.navigate(['/login']);
            }
            else{
              alert("Errore recupero Cinture");
              this.dialogRef.close();
            }
          }
        });

        this.userService.GetOrganizzazioni().subscribe(data => {
          if(data != null && data.Data != null){
            this.Organizations = data.Data;
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              this.router.navigate(['/login']);
            }
            else{
              alert("Errore recupero Organizzazioni");
              this.dialogRef.close();
            }
          }
        });

        this.user = undefined;
        let userData = this.data.object as userData;

        this.userService.GetUtente(userData.rowGuid).subscribe(data => {
          if(data != null && data.Data != null){
            this.UserForm.setValue({
              Nome: data.Data.nome,
              Cognome: data.Data.cognome,
              Email: data.Data.email,
              CodFiscale: data.Data.codFiscale,
              DataNascita: data.Data.dataNascita,
              Via: data.Data.via,
              Numero: data.Data.numero,
              Citta: data.Data.citta,
              Regione: data.Data.regione,
              Nazione: data.Data.nazione,
              RowGuid: data.Data.rowGuid,
              Organizzazione: data.Data.organizzazione,
              Cintura: data.Data.cintura?.toString()
            }); 
           }
          else if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            this.router.navigate(['/login']);
          }
          else{
            alert("Errore recupero Utente");
            this.dialogRef.close();
          }
        });
      }
        
    if(this.data.type === 'InfoSub')
      {     
        this.subList = [];   
        let userData = this.data.object as userData;

        this.subService.GetAbbonamenti(userData.rowGuid).subscribe(data => {
          if(data != null && data.Data != null){
            this.subList = data.Data.sort((a, b) => (a.isActive === b.isActive) ? 0 : a.isActive ? -1 : 1);
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              this.router.navigate(['/login']);
            }
            else{
              alert("Errore recupero Abbonamenti dell'utente");
              this.dialogRef.close();
            }
          }
        });
     }

    if(this.data.type == 'AddSub'){
      this.subType = [];
      let userData = this.data.object as userData;

      this.subService.GetTipoAbbonamenti(userData.rowGuid).subscribe(data => {
        if(data != null && data.Data != null){
          this.subType = data.Data;
        }
        else{
          if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            this.router.navigate(['/login']);
          }
          else{
            alert("Errore recupero Abbonamenti dell'utente");
            this.dialogRef.close();
          }
        }
      });
    }

    if(this.data.type == 'AddDoc'){
      this.docType = [];
      this.docService.GetTipiDocumenti().subscribe(data => {
        if(data != null && data.Data != null){
          this.docType = data.Data;
        }
        else{
          if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            this.router.navigate(['/login']);
          }
          else{
            alert("Errore recupero Tipi documento");
            this.dialogRef.close();
          }
        }
      });
    }

    if(this.data.type == 'GetDoc'){
      this.docType = [];
      this.documents = [];
      let userData = this.data.object as userData;

      this.docService.GetTipiDocumenti().subscribe(data => {
        if(data != null && data.Data != null){
          this.docType = data.Data;
        }
        else{
          if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            this.router.navigate(['/login']);
          }
          else{
            alert("Errore recupero Tipi documento");
            this.dialogRef.close();
          }
        }
      });

      this.docService.GetUserDocuments(userData.rowGuid).subscribe(data => {
        if(data != null && data.Data != null){
          this.documents = data.Data;
        }
        else if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          this.router.navigate(['/login']);
        }
        else{
          alert("Errore recupero Documenti dell'utente");
          this.dialogRef.close();
        }
      });
    }

    if(this.data.type == 'AddEvent')
    {
        //this.CategoriesData = [];
        //this.selected = [];
        //this.eventService.GetCategorie().subscribe(cat => {
        //  if(cat != null && cat.Data != null){
        //    this.CategoriesData = cat.Data;
        //  }
        //  else
        //  {
        //    if(cat.Error != null && cat.Error.Code == HttpStatusCode.Unauthorized){
        //      alert("La tua sessione è scaduta, rieffettua il login");
        //      this.router.navigate(['/login']);
        //    }
        //    else{
        //      alert("Errore recupero categorie");
        //      this.dialogRef.close();
        //    }
        //  }
        //});
    }

    if(this.data.type == 'updateEventInfo'){
        this.CategoriesData = [];
        this.selected = [];
        let eventData = this.data.object as eventData;

        //this.eventService.GetCategorie().subscribe(cat => {
        //  if(cat != null && cat.Data != null){
        //    this.CategoriesData = cat.Data;
        //  }
        //  else{
        //    if(cat.Error != null && cat.Error.Code == HttpStatusCode.Unauthorized){
        //      alert("La tua sessione è scaduta, rieffettua il login");
        //      this.router.navigate(['/login']);
        //    }
        //    else{
        //      alert("Errore recupero categorie");
        //      this.dialogRef.close();
        //    }
        //  }
        //});

        this.eventService.GetEvento(eventData.id).subscribe(event => {
          if(event != null && event.Data != null){
            this.EventForm.setValue({
              IdEvento: event.Data.id,
              NomeEvento: event.Data.nomeEvento,
              DataInizio: formatDate(event.Data.dataInizioEvento, 'yyyy-MM-dd', 'en-US'),
              DataFine: formatDate(event.Data.dataFineEvento, 'yyyy-MM-dd', 'en-US'),
              LuogoEvento: event.Data.luogoEvento,
              DescrEvento: event.Data.descrizione,
              EventSubAmount: event.Data.importoIscrizione,
              EventEndSubDate: event.Data.chiusuraIscrizioni != null ? formatDate(event.Data.chiusuraIscrizioni, 'yyyy-MM-dd', 'en-US') : new Date(),
              //LinkEvento: event.Data.link,
            }); 
           }
          else if(event.Error != null && event.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            this.router.navigate(['/login']);
          }
          else{
            alert("Errore recupero Evento");
            this.dialogRef.close();
          }
        });
    }

    if(this.data.type == 'SubscribeEvent'){
      let eventData = this.data.object as eventData;
      let userId = this.commonService.getCookie("sub");

      this.eventService.GetCompetitionsByEventAndUser(eventData.id, userId).subscribe(event => {
        if(event != null && event.Data != null){
          this.gare = event.Data;
        }
        else if(event.Error != null && event.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          this.router.navigate(['/login']);
        }
        else{
          alert("Errore recupero Evento");
          this.dialogRef.close();
        }
      });

      this.eventService.GetCategorie().subscribe(cat => {
        if(cat != null && cat.Data != null){
            this.CategoriesData = cat.Data;
        }
        else
        {
          if(cat.Error != null && cat.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            this.router.navigate(['/login']);
          }
          else{
            alert("Errore recupero categorie");
            this.dialogRef.close();
          }
        }
      });
    }

    if(this.data.type == 'BulkSubscribeEvent'){
      let eventData = this.data.object as subscribeData;
      let userId = eventData.idUtente;
      let eventId = eventData.idEvento;

      this.eventService.GetCompetitionsByEventAndUser(eventId, userId).subscribe(event => {
        if(event != null && event.Data != null){
          this.gare = event.Data;
        }
        else if(event.Error != null && event.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          this.router.navigate(['/login']);
        }
        else{
          alert("Errore recupero Evento");
          this.dialogRef.close();
        }
      });

      this.eventService.GetCategorie().subscribe(cat => {
        if(cat != null && cat.Data != null){
            this.CategoriesData = cat.Data;
        }
        else
        {
          if(cat.Error != null && cat.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            this.router.navigate(['/login']);
          }
          else{
            alert("Errore recupero categorie");
            this.dialogRef.close();
          }
        }
      });
    }


    if(this.data.type == 'GetCompetitors'){
      this.CategoriesData = [];
      this.selected = [];
      this.Competitors = [];
      let eventData = this.data.object as eventData;

      this.eventService.GetCategorie().subscribe(cat => {
        if(cat != null && cat.Data != null){
          this.CategoriesData = cat.Data;
        }
        else{
          if(cat.Error != null && cat.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            this.router.navigate(['/login']);
          }
          else{
            alert("Errore recupero categorie");
            this.dialogRef.close();
          }
        }
      });

      this.eventService.GetCompetitors(eventData.id).subscribe(comp => {
        if(comp != null && comp.Data != null){
            this.Competitors = comp.Data;
         }
        else if(comp.Error != null && comp.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          this.router.navigate(['/login']);
        }
        else{
          alert("Errore recupero Evento");
          this.dialogRef.close();
        }
      });
    }

    if(this.data.type == 'AddSezione'){
      this.selected = [];
      this.Pages = [];

      this.sitoService.GetPagine().subscribe(pages => {
        if(pages != null && pages.Data != null){
          this.Pages = pages.Data;
        }
        else if(pages.Error != null && pages.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          this.router.navigate(['/login']);
        }
        else{
          alert("Errore recupero Pagine");
          this.dialogRef.close();
        }
      });
    }

    if(this.data.type == 'createCompetition'){

      let eventData = this.data.object as eventData;
      this.eventId = eventData.id;
      
      this.eventService.GetCategorie().subscribe(cat => {
        if(cat != null && cat.Data != null){
          this.CategoriesData = cat.Data;
        }
        else{
          if(cat.Error != null && cat.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            this.router.navigate(['/login']);
          }
          else{
            alert("Errore recupero categorie");
            this.dialogRef.close();
          }
        }
      });
    }

    if(this.data.type == 'listCompetition'){

      let eventData = this.data.object as eventData;
      
      this.eventService.GetCompetitionsByEvent(eventData.id).subscribe(event => {
        if(event != null && event.Data != null){
          this.gare = event.Data;
        }
        else if(event.Error != null && event.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          this.router.navigate(['/login']);
        }
        else{
          alert("Errore recupero Evento");
          this.dialogRef.close();
        }
      });

      this.eventService.GetCategorie().subscribe(cat => {
        if(cat != null && cat.Data != null){
            this.CategoriesData = cat.Data;
        }
        else
        {
          if(cat.Error != null && cat.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            this.router.navigate(['/login']);
          }
          else{
            alert("Errore recupero categorie");
            this.dialogRef.close();
          }
        }
      });
    }
  }

  async Ok(type: string){

    if(type === 'updateInfo'){
      if (this.UserForm.valid) {
        this.userService.UpdateUtente(this.UserForm.value, Operation.AggiornaAll).subscribe(data => {
          if(data != null && data.Data != null){
            alert("Utente Aggiornato");
            this.dialogRef.close();
            let currentUrl = this.router.url;
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                this.router.navigate([currentUrl]);
            });
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              this.router.navigate(['/login']);
            }
            else{
              alert("Errore aggiornamento Utente");
              this.dialogRef.close();
            }
          }
        });
      }  
    }

    if(type === 'AddSub'){
      if (this.SubForm.valid) {

        let userData = this.data.object as userData;

        let abb = new Abbonamento(null, this.SubForm.value.IdTipoAbbonamento, null, this.SubForm.value.DataInizio, this.SubForm.value.DataFine, this.SubForm.value.UrlPagamento,
          this.SubForm.value.Importo, "", false, false, userData.rowGuid);
        
        this.subService.AddAbbonamenti(abb).subscribe(data => {
          if(data != null && data.Data != null){
            alert("Abbonamento Inserito");
            let currentUrl = this.router.url;
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                this.router.navigate([currentUrl]);
            });
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              this.router.navigate(['/login']);
            }
            else{
              alert("Errore Inserimento Abbonamento");
              this.dialogRef.close();
            }
          }
        });
      }  
    }  

    if(type == "updateEventInfo"){
      if (this.EventForm.valid) {

        let e = new Evento(this.EventForm.value.NomeEvento, this.EventForm.value.DataInizio, this.EventForm.value.DataFine,
           this.EventForm.value.LuogoEvento, this.EventForm.value.DescrEvento, "", "",
            this.EventForm.value.EventSubAmount, this.EventForm.value.EventEndSubDate);
        
        e.id = this.EventForm.value.IdEvento;

        this.eventService.UpdateEvent(e).subscribe(data => {
          if(data != null && data.Data != null){
            alert("Evento Aggiornato");
            let currentUrl = this.router.url;
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                this.router.navigate([currentUrl]);
            });
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              this.router.navigate(['/login']);
            }
            else{
              alert("Errore Aggiornamento Evento");
              this.dialogRef.close();
            }
          }
        });
      }  
    }

    if(type == "createCompetition"){
      let competition = new Competition(null, this.eventId, this.CompetitionForm.value.NomeGara,
         this.CompetitionForm.value.ImportoIscrizione,this.CompetitionForm.value.CategoriaGara, false);

      this.eventService.AddCompetition(competition).subscribe(data => {
        if(data != null && data.Data != null){
          alert("Gara Creata");
          let currentUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
              this.router.navigate([currentUrl]);
          });
          this.dialogRef.close();
        }
        else{
          if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            this.router.navigate(['/login']);
            this.dialogRef.close();
          }
          else{
            alert("Errore creazione Gara");
            this.dialogRef.close();
          }
        }
      });
    }
  }

  async AddDoc(selectInput: HTMLSelectElement, filenameInput: HTMLInputElement, fileInput: HTMLInputElement){
    const selectedOption = Number(selectInput.value);
    const selectedname = filenameInput.value;
    const file = fileInput.files?.[0];

    let fileBase64 = "";

    this.commonService.convertFileToBase64(file).then(base64 => {
      //console.log('Base64 string:', base64);
      // You can now use the base64 string as needed
      fileBase64 = base64;
    }).catch(error => {
      alert("Errore Conversione File");
      console.error('Error converting file:', error);
    });

    let userData = this.data.object as userData;

    let document = new DocumentoExt(selectedOption, userData.rowGuid, selectedname, fileBase64);

    this.docService.AddDocument(document).subscribe(data => {
      if(data != null && data.Data != null){
        alert("Documento Inserito");
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
      }
      else{
        if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          this.router.navigate(['/login']);
        }
        else if(data.Error != null && data.Error.Code == HttpStatusCode.PayloadTooLarge){
          alert("Il documento che stai provando a inserire è troppo grande");
          this.dialogRef.close();
        }
        else{
          alert("Errore Inserimento Documento");
          this.dialogRef.close();
        }
      }
    });
}

async AddRedirezione(urlInput: HTMLInputElement){
  let redirezione = new Redirection(null, urlInput.value, null, true);

  this.sitoService.AddRedirezioni(redirezione).subscribe(data => {
    if(data != null && data.Data != null){
      alert("Redirezione Inserita");
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
      this.dialogRef.close();
    }
    else{
      if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
        alert("La tua sessione è scaduta, rieffettua il login");
        this.router.navigate(['/login']);
      }
      else{
        alert("Errore Inserimento Redirezione");
        this.dialogRef.close();
      }
    }
  });
}

async AddEvent(eventNameInput: HTMLInputElement, fileInput: HTMLInputElement, dataInizioInput: HTMLDataElement, dataFineInput : HTMLDataElement,
  luogoEventoInput: HTMLInputElement, descrizioneEventoInput: HTMLInputElement, dataChiusuraIscrizione: HTMLDataElement, importoIscrizione : HTMLInputElement)
  {
  const eventName = eventNameInput.value;
  const eventStartDate = dataInizioInput.value;
  const eventEndDate = dataFineInput.value;
  const eventLocation = luogoEventoInput.value;
  const eventDescr = descrizioneEventoInput.value;
  const eventEndSub = dataChiusuraIscrizione.value;
  const eventSubAmount = importoIscrizione.value;
  //const locandina = fileInput.files?.[0];

  let fileBase64 = "";
  //let categorie: Categoria[] = [];

  //this.commonService.convertFileToBase64(locandina).then(base64 => {
  //  console.log('Base64 string:', base64);
  //  //You can now use the base64 string as needed
  //  fileBase64 = base64;
  //}).catch(error => {
  //  alert("Errore Conversione File");
  //  console.error('Error converting file:', error);
  //});

  let event = new Evento(
    eventName,
    new Date(eventStartDate),
    new Date(eventEndDate),
    eventLocation,
    eventDescr,
    "",
    "",
    Number(eventSubAmount),
    new Date(eventEndSub)
  );

  //event.categorie = categories.filter(c => eventCategories.includes(c.Id));

  this.eventService.AddEvent(event).subscribe(data => {
    if(data != null && data.Data != null){
      alert("Evento Creato");
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
      this.dialogRef.close();
    }
    else{
      if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
        alert("La tua sessione è scaduta, rieffettua il login");
        this.router.navigate(['/login']);
      }
      else{
        alert("Errore creazione Evento");
        this.dialogRef.close();
      }
    }
  });
}

UpdateSub(action: string, subscription: Abbonamento){
  switch(action){
    case "SetPayedSub":
      {
        subscription.isPayed = true;
        this.subService.UpdateAbbonamenti(SubscriptionOperation.AggiornaInfoPagamento, subscription).subscribe(data => {
          if(data != null && data.Data != null){
            alert("Pagamento Confermato");
            let currentUrl = this.router.url;
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                this.router.navigate([currentUrl]);
            });
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              this.router.navigate(['/login']);
            }
            else{
              alert("Errore conferma pagamento");
              this.dialogRef.close();
            }
          }
        });
      break;
      }

      case "RefuseSubPayment":
        {
          subscription.isPayed = false;
          this.subService.UpdateAbbonamenti(SubscriptionOperation.AggiornaInfoPagamento, subscription).subscribe(data => {
            if(data != null && data.Data != null){
              alert("Pagamento Rifuitato");
              let currentUrl = this.router.url;
              this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                  this.router.navigate([currentUrl]);
              });
            }
            else{
              if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
                alert("La tua sessione è scaduta, rieffettua il login");
                this.router.navigate(['/login']);
              }
              else{
                alert("Errore rifiuto pagamento");
                this.dialogRef.close();
              }
            }
          });
        break;
        }
  
      case "SetPaymentInProgress":
        {
          subscription.isPayed = null;

          this.subService.UpdateAbbonamenti(SubscriptionOperation.AggiornaInfoPagamento, subscription).subscribe(data => {
            if(data != null && data.Data != null){
              alert("Il pagamento è stato processato, non appena avremo ricevuto l'esito ti notificheremo l'abilitazione dell'abbonamento."+ 
                "In caso di problemi nel pagamento contattare .....");
                let currentUrl = this.router.url;
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                    this.router.navigate([currentUrl]);
                });
            }
            else{
              if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
                alert("La tua sessione è scaduta, rieffettua il login");
                this.router.navigate(['/login']);
              }
              else{
                alert("Errore aggiornamento url");
                this.dialogRef.close();
              }
            }
          });
        break;
        }   

        case "DeleteSub":
          { 
            this.subService.UpdateAbbonamenti(SubscriptionOperation.CancellaAbbonamento, subscription).subscribe(data => {
              if(data != null && data.Data != null){
                alert("Abbonamento Cancellato");
                let currentUrl = this.router.url;
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                    this.router.navigate([currentUrl]);
                });
              }
              else{
                if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
                  alert("La tua sessione è scaduta, rieffettua il login");
                  this.router.navigate(['/login']);
                }
                else{
                  alert("Errore cancellazione abbonamento");
                  this.dialogRef.close();
                }
              }
            });
          break;
          }   
  
  }
}

AddSection(urlInput: HTMLInputElement, paginaInput: HTMLSelectElement, sezioneInput: HTMLInputElement, urlDaGoogleDriveInput: HTMLInputElement, titoloInput : HTMLInputElement,
  descrizioneInput: HTMLTextAreaElement, testoAggiuntivoInput: HTMLTextAreaElement, ordineInputi: HTMLInputElement)
  {
    let image = new Graphics(null, urlInput.value, parseInt(paginaInput.value, 10), parseInt(sezioneInput.value, 10), urlDaGoogleDriveInput.checked, titoloInput.value, descrizioneInput.value, testoAggiuntivoInput.value, null, parseInt(ordineInputi.value, 10), true);
  
    this.sitoService.AddGrafica(image).subscribe(data => {
      if(data != null && data.Data != null){
        alert("Grafica inserita");
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
        this.dialogRef.close();
      }
      else{
        if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          this.router.navigate(['/login']);
        }
        else{
          alert("Errore inserimento grafica");
          this.dialogRef.close();
        }
      }
    });

  }

  AddVideo(urlInput: HTMLInputElement, titoloInput: HTMLInputElement, descrizioneInput: HTMLTextAreaElement, ordineInput: HTMLInputElement)
    {
      let video = new Video(null, urlInput.value, titoloInput.value, descrizioneInput.value, null, true);
    
      this.sitoService.AddVideo(video).subscribe(data => {
        if(data != null && data.Data != null){
          alert("Video inserito");
          let currentUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
              this.router.navigate([currentUrl]);
          });
          this.dialogRef.close();
        }
        else{
          if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            this.router.navigate(['/login']);
          }
          else{
            alert("Errore inserimento video");
            this.dialogRef.close();
          }
        }
      });
  
    } 
  
  ManageCompetition(id: string, event: string, action: string){
    if(action.toLowerCase() == "delete")
    {
      this.eventService.DeleteCompetition(id, event).subscribe(data => {
        if(data != null && data.Data != null){
          alert("Gara Cancellata");
          let currentUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
              this.router.navigate([currentUrl]);
          });
          this.dialogRef.close();
        }
        else{
          if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            this.router.navigate(['/login']);
          }
          else{
            alert("Errore cancellazione Gara");
            this.dialogRef.close();
          }
        }
      });
    }
  }

  SubscribeEvent(IdGara: string, IdEvent: string) {
    let userId = this.commonService.getCookie('sub');

    let note = prompt("Inserisci una nota per la tua iscrizione (opzionale):");

    let subscription = new Iscrizione(IdEvent, userId, note, IdGara, false);

    this.eventService.Subscribe(subscription).subscribe(data => {
      if(data != null && data.Data != null){
        alert("Iscrizione alla Gara Effettuata");
        this.ngOnInit();
      }
      else{
        if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          this.router.navigate(['/login']);
          this.dialogRef.close();
        }
        else{
          alert("Errore Iscrizione Gara");
          this.dialogRef.close();
        }
      }
    });
  }

  BulkSubscribeEvent(IdGara: string, IdEvent: string, IdUser: string) {

    let note = prompt("Inserisci una nota per la tua iscrizione (opzionale):");

    let subscription = new Iscrizione(IdEvent, IdUser, note, IdGara, false);

    this.eventService.Subscribe(subscription).subscribe(data => {
      if(data != null && data.Data != null){
        alert("Iscrizione alla Gara Effettuata");
        this.ngOnInit();
      }
      else{
        if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          this.router.navigate(['/login']);
          this.dialogRef.close();
        }
        else{
          alert("Errore Iscrizione Gara");
          this.dialogRef.close();
        }
      }
    });
  }


  DeleteSubscription(IdGara: string, IdEvent: string) {
    let userId = this.commonService.getCookie('sub');

    let note = prompt("Inserisci il motivo per cui stai cancellando l'iscrizione (opzionale):");

    let subscription = new Iscrizione(IdEvent, userId, note, IdGara, true);
    this.eventService.DeleteSubscription(subscription).subscribe(data => {
      if(data != null && data.Data != null){
        alert("Hai cancellato la tua iscrizione alla Gara");
        this.ngOnInit();
      }
      else{
        if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          this.router.navigate(['/login']);
          this.dialogRef.close();
        }
        else{
          alert("Errore cancellazione Gara");
          this.dialogRef.close();
        }
      }
    });
  }

  BulkDeleteSubscription(IdGara: string, IdEvent: string, IdUser: string) {

    let note = prompt("Inserisci il motivo per cui stai cancellando l'iscrizione (opzionale):");

    let subscription = new Iscrizione(IdEvent, IdUser, note, IdGara, true);
    this.eventService.DeleteSubscription(subscription).subscribe(data => {
      if(data != null && data.Data != null){
        alert("Hai cancellato la tua iscrizione alla Gara");
        this.ngOnInit();
      }
      else{
        if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          this.router.navigate(['/login']);
          this.dialogRef.close();
        }
        else{
          alert("Errore cancellazione Gara");
          this.dialogRef.close();
        }
      }
    });
  }

  getCategorieDescrizione(CategoriaId: number): string | undefined {
    return this.CategoriesData.find(c => c.Id == CategoriaId)?.Descrizione;
  }

  onCheckboxChange(event: any, checkboxList: any) {
    if (event.target.checked) {
      this.selected.push(checkboxList.Id);
    } else {
      const index = this.selected.indexOf(checkboxList.Id);
      if (index > -1) {
        this.selected.splice(index, 1);
      }
    }
  }

  getTypeById(_id: number): string {
    const valueObj = this.docType.find(value => value.id === _id);
    return valueObj ? valueObj.descrizione : '';
  }  

  async openDoc(DocId: string | null) {
    var doc = null;
    this.docService.GetDocument(DocId).subscribe(data => {
      if(data != null && data.Data != null){
          doc = data.Data.datiDocumento.replace('data:application/pdf;base64,','');
          
          const byteArray = new Uint8Array(
            atob(doc)
            .split('')
            .map((char) => char.charCodeAt(0))
          );
  
          const file = new Blob([byteArray], {type: 'application/pdf'});
          const fileUrl = URL.createObjectURL(file);
  
          let fileName = data.Data.nomeDocumento;
          let link = document.createElement('a');
          link.download = fileName;
          link.target = '_blank';
          link.href = fileUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link)
        }
      else{
        if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        }
        else{
          alert("Errore recupero Utenti");
        }
      }
    });
  }  

  formatDate(date: Date): string {
    let _formatdate = this.datePipe.transform(date);
    if(_formatdate == null){
      return "";
    } 
    else{
      return _formatdate
    }

  }

  close(): void {
    this.dialogRef.close();
  }
}
