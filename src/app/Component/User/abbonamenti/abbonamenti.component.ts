import { DatePipe } from '@angular/common';
import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Abbonamento } from 'src/app/Model/Abbonamento/Abbonamento';
import { SubscriptionOperation } from 'src/app/Model/Base/enum';
import { AbbonamentiService } from 'src/Services/Abbonamenti/abbonamenti.service';
import { CommonService } from 'src/Services/Common/common.service';

@Component({
  selector: 'app-abbonamenti',
  templateUrl: './abbonamenti.component.html',
  styleUrl: './abbonamenti.component.css',
  standalone: false
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
  datePipe: DatePipe = new DatePipe('en-US');
  

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
            urlPagamento: item.urlPagamento,
            importo: item.importo,
            idCheckout: item.idCheckout,
            isActive: item.isActive,
            isPayed: item.isPayed,
            utente: item.utente
          }));

          this.ActiveSubscription = this.Abbonamenti.filter(a => a.isPayed && a.dataIscrizione <= this.today && a.dataScadenza != null && a.dataScadenza > this.today);

          this.ExpiredSubscription = this.Abbonamenti.filter(a => a.isPayed && a.dataScadenza != null && a.dataScadenza < this.today);

          this.ToBeActivatedSubscription = this.Abbonamenti.filter(a => !a.isPayed && a.dataIscrizione > this.today && (a.dataScadenza == null || a.dataScadenza >= this.today));

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

    async UpdateSub(action: string, subscription: Abbonamento){
      switch(action){
        case "SetPayedSub":
          {
            await(await this.SubService.UpdateAbbonamenti(SubscriptionOperation.SetAbbonamentoPagato, subscription)).subscribe(data => {
              if(data != null && data.Data != null){
                alert("Pagamento Confermato");
                window.location.reload();
              }
              else{
                if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
                  alert("La tua sessione è scaduta, rieffettua il login");
                  window.location.href = '/login';
                }
                else{
                  alert("Errore conferma pagamento");
                }
              }
            });
          break;
          }
    
          case "SetPaymentInProgress":
            {
              subscription.isPayed = null;
              subscription.dataIscrizione = new Date();
              subscription.dataScadenza = null;
    
              await(await this.SubService.UpdateAbbonamenti(SubscriptionOperation.AggiornaInfoPagamento, subscription)).subscribe(data => {
                if(data != null && data.Data != null){
                  alert("Il pagamento è stato processato, non appena avremo ricevuto l'esito ti notificheremo l'abilitazione dell'abbonamento."+ 
                    "In caso di problemi nel pagamento contattare .....");
                  window.location.reload();
                }
                else{
                  if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
                    alert("La tua sessione è scaduta, rieffettua il login");
                    window.location.href = '/login';
                  }
                  else{
                    alert("Il tuo pagamento è stato processato, ritorna piu tardi per verificare l'abilitazione dell'abbonamento");
                  }
                }
              });
            break;
            }   
    
            case "DeleteSub":
              { 
                await(await this.SubService.UpdateAbbonamenti(SubscriptionOperation.CancellaAbbonamento, subscription)).subscribe(data => {
                  if(data != null && data.Data != null){
                    alert("Abbonamento Cancellato");
                    window.location.reload();
                  }
                  else{
                    if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
                      alert("La tua sessione è scaduta, rieffettua il login");
                      window.location.href = '/login';
                    }
                    else{
                      alert("Errore cancellazione abbonamento");
                    }
                  }
                });
              break;
              }   
      
      }
    }

    async Pay(sub: Abbonamento){

      await this.UpdateSub("SetPaymentInProgress", sub);

      if(sub.urlPagamento != null){
        window.open(sub.urlPagamento, '_blank');
      }
      
      window.location.reload();

    }
}
