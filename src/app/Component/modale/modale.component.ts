import { HttpStatusCode } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { eventData, ModalData, userData } from 'src/app/Interface/modal-data';
import { Operation } from 'src/app/Model/Base/enum';
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
import { formatDate } from '@angular/common';
import { Iscrizione } from 'src/app/Model/Evento/Iscrizione';
import { Competitors } from 'src/app/Interface/Competitors';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {
  
  user : User | undefined ;

  subscription : Abbonamento | undefined;
  subList : Abbonamento[] = [];
  subType : TipoAbbonamento[] = [];
  docType : TipoDocumento[] = [];
  document : Document | undefined;

  DataEvent : Evento | undefined;
  CategoriesData : Categoria[] = [];
  selectedCategories: number[] = [];
  Competitors: Competitors[] = [];

  UserForm: FormGroup;
  SubForm: FormGroup;
  DocForm: FormGroup;
  EventForm : FormGroup;

  displayedColumns: string[] = ['Tipo', 'Inizio', 'Scadenza'];
  dataSource = new MatTableDataSource(this.subList);

  fileName: string = "";

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
    private fb: FormBuilder
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
              window.location.href = '/login';
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
            window.location.href = '/login';
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
              window.location.href = '/login';
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
            window.location.href = '/login';
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
            window.location.href = '/login';
          }
          else{
            alert("Errore recupero Tipi documento");
            this.dialogRef.close();
          }
        }
      });
    }

    if(this.data.type == 'AddEvent')
    {
        this.CategoriesData = [];
        this.selectedCategories = [];
        await(await this.eventService.GetCategorie()).subscribe(cat => {
          if(cat != null && cat.Data != null){
            this.CategoriesData = cat.Data;
          }
          else
          {
            if(cat.Error != null && cat.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              window.location.href = '/login';
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
        this.selectedCategories = [];
        let eventData = this.data.object as eventData;

        await(await this.eventService.GetCategorie()).subscribe(cat => {
          if(cat != null && cat.Data != null){
            this.CategoriesData = cat.Data;
          }
          else{
            if(cat.Error != null && cat.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              window.location.href = '/login';
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
            window.location.href = '/login';
          }
          else{
            alert("Errore recupero Evento");
            this.dialogRef.close();
          }
        });
    }

    if(this.data.type == 'SubscribeEvent'){
      this.CategoriesData = [];
      this.selectedCategories = [];
      let eventData = this.data.object as eventData;

      await(await this.eventService.GetEvento(eventData.id)).subscribe(event => {
        if(event != null && event.Data != null){
          this.DataEvent = event.Data;
         }
        else if(event.Error != null && event.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        }
        else{
          alert("Errore recupero Evento");
          this.dialogRef.close();
        }
      });
    }

    if(this.data.type == 'GetCompetitors'){
      this.CategoriesData = [];
      this.selectedCategories = [];
      this.Competitors = [];
      let eventData = this.data.object as eventData;

      await(await this.eventService.GetCategorie()).subscribe(cat => {
        if(cat != null && cat.Data != null){
          this.CategoriesData = cat.Data;
        }
        else{
          if(cat.Error != null && cat.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            window.location.href = '/login';
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
          window.location.href = '/login';
        }
        else{
          alert("Errore recupero Evento");
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
            window.location.reload();
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              window.location.href = '/login';
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

        let abb = new Abbonamento(null, this.SubForm.value.IdTipoAbbonamento, null, this.SubForm.value.DataInizio, null, false, userData.rowGuid);
        
        await(await this.subService.AddAbbonamenti(abb)).subscribe(data => {
          if(data != null && data.Data != null){
            alert("Abbonamento Inserito");
            window.location.reload();
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              window.location.href = '/login';
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
            window.location.reload();
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              window.location.href = '/login';
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

      let EventSubscription = new Iscrizione(EventId, UserId, this.selectedCategories, SubscriptionNote)

      await(await this.eventService.Subscribe(EventSubscription)).subscribe(data => {
        if(data != null && data.Data != null){
          alert("Iscrizione effettuata");
          window.location.reload();
        }
        else{
          if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            window.location.href = '/login';
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
        window.location.reload();
      }
      else{
        if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
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

async AddEvent(eventNameInput: HTMLInputElement, fileInput: HTMLInputElement, dataInizioInput: HTMLDataElement, dataFineInput : HTMLDataElement,
  luogoEventoInput: HTMLInputElement, descrizioneEventoInput: HTMLInputElement, linkEventoInput: HTMLInputElement, categories : Categoria[])
  {
  const eventName = eventNameInput.value;
  const eventStartDate = dataInizioInput.value;
  const eventEndDate = dataFineInput.value;
  const eventLocation = luogoEventoInput.value;
  const eventDescr = descrizioneEventoInput.value;
  const eventLink = linkEventoInput.value;
  const eventCategories = this.selectedCategories;
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
      window.location.reload();
    }
    else{
      if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
        alert("La tua sessione è scaduta, rieffettua il login");
        window.location.href = '/login';
      }
      else{
        alert("Errore creazione Evento");
        this.dialogRef.close();
      }
    }
  });
}

  getCategorieDescrizione(CategoriaId: number): string | undefined {
    return this.CategoriesData.find(c => c.Id == CategoriaId)?.Descrizione;
  }

  onCheckboxChange(event: any, category: any) {
    if (event.target.checked) {
      this.selectedCategories.push(category.Id);
    } else {
      const index = this.selectedCategories.indexOf(category.Id);
      if (index > -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
