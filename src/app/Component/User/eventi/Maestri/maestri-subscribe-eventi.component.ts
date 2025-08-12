import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModaleComponent } from 'src/app/Component/modale/modale.component';
import { ModalData, subscribeData } from 'src/app/Interface/modal-data';
import { Competition } from 'src/app/Model/Evento/Competition';
import { Evento } from 'src/app/Model/Evento/Evento';
import { User } from 'src/app/Model/User/User';
import { CommonService } from 'src/Services/Common/common.service';
import { EventiService } from 'src/Services/Eventi/eventi.service';
import { UtentiService } from 'src/Services/Utenti/utenti.service';

@Component({
  selector: 'app-maestri-subscribe-eventi',
  imports: [],
  templateUrl: './maestri-subscribe-eventi.component.html',
  styleUrl: './maestri-subscribe-eventi.component.css'
})
export class MaestriSubscribeEventiComponent {

  athletes : User[] = [];

  competitions : Competition[] = [];
  eventid: string | null = null;

  constructor(private EventService:EventiService, private route: ActivatedRoute, private userService: UtentiService,
              private common: CommonService, private dialog: MatDialog) {

    this.route.queryParams.subscribe(params => {
    this.eventid = params['EventId'];
  });

    this.GetAtheltes();
  }

  GetAtheltes() 
  {
    let organization = this.common.getCookie("Org");
    if (organization) {
      this.userService.GetAtletiOrganizzazione(organization).subscribe(response => {
        if (response && response.Data) {
          this.athletes = response.Data;
        } else {
          alert("Errore nel recupero degli atleti della tua organizzazione");
        }
      });
    } else {
      alert("Non fai parte di nessuna organizzazione, contatta l'amministratore del sito");
    }
  }

  Subscribe(user: User) {
    this.openModal("BulkSubscribeEvent", user, this.eventid);
  }

  openModal(type: string, user: User | null, eventid: string | null): void {

    let subscribeData: subscribeData = {
      idEvento: eventid,
      idUtente: user ? user.rowGuid : null
    }
      const dialogRef = this.dialog.open(ModaleComponent,
        { data: { type, object: subscribeData } as ModalData<subscribeData> }
      );
    }

  ReportSubOrg() {
    let Org = this.common.getCookie("Org");

    this.EventService.GetReportIscrizioniByMaster(this.eventid, Org).subscribe((data) => {
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
}

