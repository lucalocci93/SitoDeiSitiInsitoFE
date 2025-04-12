import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Evento } from 'src/app/Model/Evento/Evento';
import { CommonService } from 'src/Services/Common/common.service';
import { EventiService } from 'src/Services/Eventi/eventi.service';
import { ModaleComponent } from '../../modale/modale.component';
import { ModalData } from 'src/app/Interface/modal-data';
import { Iscrizione, IscrizioneExt, SingolaIscrizione } from 'src/app/Model/Evento/Iscrizione';
import { Categoria } from 'src/app/Model/Evento/Categoria';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrl: './eventi.component.css',
  standalone: false
})
export class EventiComponent implements OnInit {

  constructor(private EventService: EventiService, private common: CommonService, public dialog: MatDialog) {
    
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

  async ngOnInit() {

    const UserId = this.common.getCookie("sub");

    (await this.EventService.GetEventi()).subscribe(async (data) => {
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
          copertina: item.copertina
        }));

        this.ToBeSubscribedEvent = this.Events.filter(a => a.dataInizioEvento > new Date() && a.dataFineEvento > new Date());

        this.PastEvent = this.Events.filter(a => a.dataFineEvento != null && a.dataFineEvento < new Date());
        await(await this.EventService.GetCategorie()).subscribe(cat => {
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

        (await this.EventService.GetSubscription(UserId)).subscribe(data => {
          if (data != null && data.Data != null) 
          {
            const EventIds = new Set(this.Events.map(sub => sub.id));
            const PastEvents = new Set(this.PastEvent.map(sub => sub.id));
            this.SubscribedEvent = data.Data.filter(event => EventIds.has(event.eventId) && !PastEvents.has(event.eventId));

            this.SubscribedEvent.forEach(e =>
              this.ExtendedSub.push(new IscrizioneExt(e, this.Events.find(ev => ev.id == e.eventId)))
            )
          }
          else if (data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            window.location.href = '/login';
          }
          else {
            alert("Errore recupero Iscrizioni");
          }
        });
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

  async DeleteSubscribe(Iscrizione: IscrizioneExt){
    await(await this.EventService.DeleteSubscription(Iscrizione.Iscrizione.eventId, Iscrizione.Iscrizione.userId, Iscrizione.Iscrizione.categoria)).subscribe(cat => {
      if(cat != null && cat.Data != null){
        alert("Iscrizione Cancellata");
        window.location.reload();
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

  }
}
