import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Abbonamento } from 'src/app/Model/Abbonamento/Abbonamento';
import { AbbonamentiService } from 'src/Services/Abbonamenti/abbonamenti.service';
import { CommonService } from 'src/Services/Common/common.service';

@Component({
  selector: 'app-abbonamenti',
  templateUrl: './abbonamenti.component.html',
  styleUrl: './abbonamenti.component.css'
})
export class AbbonamentiComponent {

  Abbonamenti: Abbonamento[] = [];
  ActiveSubscription: Abbonamento[] = [];
  ExpiredSubscription: Abbonamento[] = [];
  ToBeActivatedSubscription : Abbonamento[] = [];

  searchText = '';
  currentPage = 1;
  itemsPerPage = 5;
  pageSizes = [5, 10, 15, 20];

  displayedColumns: string[] = ['TipoAbbonamento', 'DataInizio', 'DataScadenza'];

  today = new Date();

  constructor(private SubService: AbbonamentiService, private common: CommonService, public dialog: MatDialog) {}
    
    async ngOnInit() {
      await (await this.SubService.GetAbbonamenti(this.common.getCookie("sub"))).subscribe(data => {
        if(data != null && data.Data != null){
          
          this.Abbonamenti = data.Data.map(item => ({
            id: item.id,
            idTipoAbbonamento: item.idTipoAbbonamento,
            tipoAbbonamento: item.tipoAbbonamento,
            dataIscrizione: new Date(item.dataIscrizione),
            dataScadenza: item.dataScadenza ? new Date(item.dataScadenza) : null,
            isActive: item.isActive,
            utente: item.utente
          }));

          this.ActiveSubscription = this.Abbonamenti.filter(a => a.isActive);

          this.ExpiredSubscription = this.Abbonamenti.filter(a => !a.isActive && a.dataScadenza != null && a.dataScadenza < this.today);

          this.ToBeActivatedSubscription = this.Abbonamenti.filter(a => !a.isActive && a.dataIscrizione != null && a.dataIscrizione > this.today);

        }
        else if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        }
        else{
          alert("Errore recupero Abbonamenti");
        }
      });
    }
}
