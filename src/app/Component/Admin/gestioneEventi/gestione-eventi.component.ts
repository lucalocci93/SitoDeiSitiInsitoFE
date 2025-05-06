import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalData } from 'src/app/Interface/modal-data';
import { Evento } from 'src/app/Model/Evento/Evento';
import { CommonService } from 'src/Services/Common/common.service';
import { EventiService } from 'src/Services/Eventi/eventi.service';
import { ModaleComponent } from '../../modale/modale.component';
import { User } from 'src/app/Model/User/User';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gestione-eventi',
  templateUrl: './gestione-eventi.component.html',
  styleUrl: './gestione-eventi.component.css',
  standalone: false
})
export class GestioneEventiComponent {

    eventi: Evento[] = [];
    searchText = '';
    currentPage = 1;
    itemsPerPage = 5;
    pageSizes = [5, 10, 15, 20];
  
    //displayedColumns: string[] = ['Copertina','NomeEvento', 'DataInizioEvento', 'DataFineEvento', 'LuogoEvento', 'Categorie', 'Descrizione', 'Link', 'Azioni'];
    displayedColumns: string[] = ['NomeEvento', 'DataInizioEvento', 'DataFineEvento', 'LuogoEvento', 'Categorie', 'Descrizione', 'Link', 'Azioni'];


  constructor(private EventiService: EventiService, private common: CommonService, public dialog: MatDialog) { }
    
    async ngOnInit() {
      await (await this.EventiService.GetEventi()).subscribe(data => {
        if(data != null && data.Data != null){
          this.eventi = data.Data;
        }
        else if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        }
        else{
          alert("Errore recupero Eventi");
        }
      });
    }
  
  openModal(type: string, evento: Evento | null): void {
    const dialogRef = this.dialog.open(ModaleComponent,
      { data: { type, object: evento } as ModalData<Evento> }
    );
  }
  
  //getSanitizedImage(imageData: string, contentType: string): SafeUrl {
  //  if(imageData === null || imageData === undefined || imageData.trim().length === 0) return ""
  //  return this.sanitizer.bypassSecurityTrustUrl(`data:${contentType};base64,${imageData}`);
  //}

  getCategorieDescrizione(categorie: any[]): string {
    return categorie.map(c => c.Descrizione).join(', ');
  }

  CreaEvento(){
    this.openModal('AddEvent', null);
  }

  get filteredData() {
    let searchValue = this.searchText.toLowerCase();
    return this.eventi.filter(item => 
      item.nomeEvento.toLowerCase().includes(searchValue) ||
      item.descrizione.toString().includes(searchValue) ||
      item.luogoEvento.toString().includes(searchValue) ||
      item.link.toLowerCase().includes(searchValue)
    );
  }

  async DownloadExcelCompetitor(EventId: string | null) {
    var doc = null;
    await(await this.EventiService.GetCompetitorExcel(EventId)).subscribe(data => {
      if(data != null && data.Data != null){
          doc = data.Data.datiDocumento.replace('data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,','');

          const byteArray = new Uint8Array(
            atob(doc)
            .split('')
            .map((char) => char.charCodeAt(0))
          );
  
          const file = new Blob([byteArray], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
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
          alert("Errore recupero dati iscritti evento");
        }
      }
    });
  }
  
}
