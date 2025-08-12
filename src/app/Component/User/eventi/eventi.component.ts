import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Evento } from 'src/app/Model/Evento/Evento';
import { CommonService } from 'src/Services/Common/common.service';
import { EventiService } from 'src/Services/Eventi/eventi.service';
import { ModaleComponent } from '../../modale/modale.component';
import { ModalData } from 'src/app/Interface/modal-data';
import { Iscrizione, IscrizioneExt, SingolaIscrizione } from 'src/app/Model/Evento/Iscrizione';
import { Categoria } from 'src/app/Model/Evento/Categoria';
import { DatePipe } from '@angular/common';
import { Notification } from 'src/app/Interface/Notification';
import { Pagine } from 'src/app/Model/Base/enum';
import { AppComponent } from 'src/app/app.component';
import { SitoService } from 'src/Services/Sito/sito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrl: './eventi.component.css',
  standalone: false
})
export class EventiComponent implements OnInit {

  constructor(private router: Router, private EventService: EventiService, private common: CommonService,
                private sitoService: SitoService, public dialog: MatDialog) {
    
  }

  Events : Evento[] = []; 
  PastEvent : Evento[] = [];
  ToBeSubscribedEvent : Evento[] = [];
  SubscribedEvent: SingolaIscrizione[] = [];
  CategoriesData: Categoria[] = [];
  ExtendedSub : IscrizioneExt[] = [];

  searchText = '';
  currentPage = 1;
  itemsPerPage = 5;
  pageSizes = [5, 10, 15, 20];

  displayedColumns: string[] = ['TipoAbbonamento', 'DataInizio', 'DataScadenza'];

  datePipe: DatePipe = new DatePipe('en-US');

  EventiNotification: Notification[] = [];

  async ngOnInit() {

    const UserId = this.common.getCookie("sub");

    this.GetEventNotification();

    this.EventService.GetCategorie().subscribe(cat => {
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
        }
      }
    });

    this.EventService.GetEventi().subscribe(async (data) => {
      if (data != null && data.Data != null) {
        this.Events = data.Data.map(item => ({
          id: item.id,
          nomeEvento: item.nomeEvento,
          dataInizioEvento: new Date(item.dataInizioEvento),
          dataFineEvento: new Date(item.dataFineEvento),
          luogoEvento: item.luogoEvento,
          descrizione: item.descrizione,
          link: item.link,
          categorie: item.categorie,
          copertina: item.copertina,
          importoIscrizione: item.importoIscrizione,
          chiusuraIscrizioni: item.chiusuraIscrizioni,
        }));

        this.ToBeSubscribedEvent = this.Events.filter(a => a.chiusuraIscrizioni != null ? a.chiusuraIscrizioni >= new Date() : a.dataFineEvento > new Date());

        this.PastEvent = this.Events.filter(a => a.dataFineEvento != null && a.dataFineEvento < new Date());
      }
      else if (data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized) {
        alert("La tua sessione è scaduta, rieffettua il login");
        window.location.href = '/login';
      }
      else {
        alert("Errore recupero Eventi");
      }
    });
  }

  openModal(type: string, evento: Evento | null): void {
    const dialogRef = this.dialog.open(ModaleComponent,
      { data: { type, object: evento } as ModalData<Evento> }
    );
  }
  
  getCategorieDescrizione(CategoriaId: number): string | undefined {
    return this.CategoriesData.find(c => c.Id == CategoriaId)?.Descrizione;
  }
  
  async Subscribe(evento : Evento){
    this.openModal("SubscribeEvent", evento);
  }

  BulkSubscribe(event: Evento){
    this.router.navigate(['/eventi/bulksub'], { queryParams: { EventId: event.id } });
  }

  EventSubscriptionReport(evento: Evento) {
    let UserId = this.common.getCookie("sub");

    this.EventService.GetReportIscrizioni(evento.id, UserId).subscribe((data) => {
      if (data != null && data.Data != null) {
        
        const byteArray = new Uint8Array(
          atob(data.Data.datiDocumento)
          .split('')
          .map((char) => char.charCodeAt(0))
        );

        const file = new Blob([byteArray], {type: 'application/pdf'});
        const fileUrl = URL.createObjectURL(file);

        let link = document.createElement('a');
        link.download = data.Data.nomeDocumento;
        link.target = '_blank';
        link.href = fileUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } 
      else if (data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized) {
        alert("La tua sessione è scaduta, rieffettua il login");
        window.location.href = '/login';
      } else {
        alert(data.Error?.Message || "Errore recupero Report Iscrizioni");
      }
    });
  }

  GetEventNotification() {
    this.sitoService.GetNotificationByPage(Pagine.Eventi.valueOf()).subscribe(data => {
      if(data != null && data.Data != null)
        {
          data.Data.forEach((item: Notification) => {
            this.EventiNotification.push(item);
          });
        }
        else{
          alert("Errore recupero immagini homepage");
        } 
      });
  }

  UserIsMaster(): boolean {
    return this.common.getCookie("SportRole") === "Maestro";
  }
  
}
