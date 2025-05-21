import { HttpStatusCode } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { eventData, ModalData, userData } from 'src/app/Interface/modal-data';
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

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css'],
  standalone: false
})
export class ModaleComponent implements OnInit {
  
  user : User | undefined ;

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

  UserForm: FormGroup;
  SubForm: FormGroup;
  DocForm: FormGroup;
  EventForm : FormGroup;
  ImageForm : FormGroup;

  SubdisplayedColumns: string[] = ['Tipo', 'Inizio', 'Scadenza', "Pagato", "Azioni"];
  DocumentdisplayedColumns: string[] = ['Tipo', 'Nome', 'Data', "Azioni"];

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
      RowGuid:[]
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
      LinkEvento: [''],
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
  }
    
  async ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    if(this.data.type === 'Info')
      {
        this.user = undefined;
        let userData = this.data.object as userData;
        await(await this.userService.GetUtente(userData.rowGuid)).subscribe(data => {
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
              RowGuid: data.Data.rowGuid
            }); 
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
        this.user = undefined;
        let userData = this.data.object as userData;

        await(await this.userService.GetUtente(userData.rowGuid)).subscribe(data => {
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
              RowGuid: data.Data.rowGuid
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

        await(await this.subService.GetAbbonamenti(userData.rowGuid)).subscribe(data => {
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

      await(await this.subService.GetTipoAbbonamenti(userData.rowGuid)).subscribe(data => {
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
      await(await this.docService.GetTipiDocumenti()).subscribe(data => {
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

      await(await this.docService.GetTipiDocumenti()).subscribe(data => {
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

      await(await this.docService.GetUserDocuments(userData.rowGuid)).subscribe(data => {
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
        this.CategoriesData = [];
        this.selected = [];
        await(await this.eventService.GetCategorie()).subscribe(cat => {
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

    if(this.data.type == 'updateEventInfo'){
        this.CategoriesData = [];
        this.selected = [];
        let eventData = this.data.object as eventData;

        await(await this.eventService.GetCategorie()).subscribe(cat => {
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

        await(await this.eventService.GetEvento(eventData.id)).subscribe(event => {
          if(event != null && event.Data != null){
            this.EventForm.setValue({
              IdEvento: event.Data.id,
              NomeEvento: event.Data.nomeEvento,
              DataInizio: formatDate(event.Data.dataInizioEvento, 'yyyy-MM-dd', 'en-US'),
              DataFine: formatDate(event.Data.dataFineEvento, 'yyyy-MM-dd', 'en-US'),
              LuogoEvento: event.Data.luogoEvento,
              DescrEvento: event.Data.descrizione,
              LinkEvento: event.Data.link,
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
      this.CategoriesData = [];
      this.selected = [];
      let eventData = this.data.object as eventData;

      await(await this.eventService.GetEvento(eventData.id)).subscribe(event => {
        if(event != null && event.Data != null){
          this.DataEvent = event.Data;
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

    if(this.data.type == 'GetCompetitors'){
      this.CategoriesData = [];
      this.selected = [];
      this.Competitors = [];
      let eventData = this.data.object as eventData;

      await(await this.eventService.GetCategorie()).subscribe(cat => {
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

      await(await this.eventService.GetCompetitors(eventData.id)).subscribe(comp => {
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

      await(await this.sitoService.GetPagine()).subscribe(pages => {
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
  }

  async Ok(type: string){

    if(type === 'updateInfo'){
      if (this.UserForm.valid) {
        await(await this.userService.UpdateUtente(this.UserForm.value, Operation.AggiornaAll)).subscribe(data => {
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
        
        await(await this.subService.AddAbbonamenti(abb)).subscribe(data => {
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
           this.EventForm.value.LuogoEvento, this.EventForm.value.DescrEvento, this.EventForm.value.LinkEvento, "");
        
        e.id = this.EventForm.value.IdEvento;

        await(await this.eventService.UpdateEvent(e)).subscribe(data => {
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

    if(type == "SubscribeEvent"){
      const SubscriptionNote = (document.getElementById('SubscriptionNote') as HTMLInputElement).value;
      const EventId = this.DataEvent?.id;
      const UserId = this.commonService.getCookie("sub");

      let EventSubscription = new Iscrizione(EventId, UserId, this.selected, SubscriptionNote)

      await(await this.eventService.Subscribe(EventSubscription)).subscribe(data => {
        if(data != null && data.Data != null){
          alert("Iscrizione effettuata");
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
          else if(data.Error != null && data.Error.Code == HttpStatusCode.Conflict){
            alert("E' gia stata effettuata un iscrizione per queste categorie");
            this.dialogRef.close();
          }
          else if(data.Error != null && data.Error.Code == HttpStatusCode.NotFound){
            alert("Per iscriversi è necessario selezionare almeno una categoria");
            this.dialogRef.close();
          }
          else{
            alert("Errore durante Iscrizione Evento");
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

    await this.commonService.convertFileToBase64(file).then(base64 => {
      //console.log('Base64 string:', base64);
      // You can now use the base64 string as needed
      fileBase64 = base64;
    }).catch(error => {
      alert("Errore Conversione File");
      console.error('Error converting file:', error);
    });

    let userData = this.data.object as userData;

    let document = new DocumentoExt(selectedOption, userData.rowGuid, selectedname, fileBase64);

    await(await this.docService.AddDocument(document)).subscribe(data => {
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

  await(await this.sitoService.AddRedirezioni(redirezione)).subscribe(data => {
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
  luogoEventoInput: HTMLInputElement, descrizioneEventoInput: HTMLInputElement, linkEventoInput: HTMLInputElement, categories : Categoria[])
  {
  const eventName = eventNameInput.value;
  const eventStartDate = dataInizioInput.value;
  const eventEndDate = dataFineInput.value;
  const eventLocation = luogoEventoInput.value;
  const eventDescr = descrizioneEventoInput.value;
  const eventLink = linkEventoInput.value;
  const eventCategories = this.selected;
  const locandina = fileInput.files?.[0];

  let fileBase64 = "";
  let categorie: Categoria[] = [];

  await this.commonService.convertFileToBase64(locandina).then(base64 => {
    //console.log('Base64 string:', base64);
    // You can now use the base64 string as needed
    fileBase64 = base64;
  }).catch(error => {
    alert("Errore Conversione File");
    console.error('Error converting file:', error);
  });

  let event = new Evento(eventName, new Date(eventStartDate), new Date(eventEndDate), eventLocation, eventDescr, eventLink, fileBase64);

  event.categorie = categories.filter(c => eventCategories.includes(c.Id));

  await(await this.eventService.AddEvent(event)).subscribe(data => {
    if(data != null && data.Data != null){
      alert("Evento Creato");
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
        alert("Errore creazione Evento");
        this.dialogRef.close();
      }
    }
  });
}

async UpdateSub(action: string, subscription: Abbonamento){
  switch(action){
    case "SetPayedSub":
      {
        subscription.isPayed = true;
        await(await this.subService.UpdateAbbonamenti(SubscriptionOperation.AggiornaInfoPagamento, subscription)).subscribe(data => {
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
          await(await this.subService.UpdateAbbonamenti(SubscriptionOperation.AggiornaInfoPagamento, subscription)).subscribe(data => {
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

          await(await this.subService.UpdateAbbonamenti(SubscriptionOperation.AggiornaInfoPagamento, subscription)).subscribe(data => {
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
            await(await this.subService.UpdateAbbonamenti(SubscriptionOperation.CancellaAbbonamento, subscription)).subscribe(data => {
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

async AddSection(urlInput: HTMLInputElement, paginaInput: HTMLSelectElement, sezioneInput: HTMLInputElement, urlDaGoogleDriveInput: HTMLInputElement, titoloInput : HTMLInputElement,
  descrizioneInput: HTMLTextAreaElement, testoAggiuntivoInput: HTMLTextAreaElement, ordineInputi: HTMLInputElement)
  {
    let image = new Graphics(null, urlInput.value, parseInt(paginaInput.value, 10), parseInt(sezioneInput.value, 10), urlDaGoogleDriveInput.checked, titoloInput.value, descrizioneInput.value, testoAggiuntivoInput.value, null, parseInt(ordineInputi.value, 10), true);
  
    await(await this.sitoService.AddGrafica(image)).subscribe(data => {
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

  async AddVideo(urlInput: HTMLInputElement, titoloInput: HTMLInputElement, descrizioneInput: HTMLTextAreaElement, ordineInput: HTMLInputElement)
    {
      let video = new Video(null, urlInput.value, titoloInput.value, descrizioneInput.value, null, true);
    
      await(await this.sitoService.AddVideo(video)).subscribe(data => {
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
    await(await this.docService.GetDocument(DocId)).subscribe(data => {
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
