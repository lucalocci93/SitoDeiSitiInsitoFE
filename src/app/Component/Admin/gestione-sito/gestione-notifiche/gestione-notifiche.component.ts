import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ModaleComponent } from 'src/app/Component/modale/modale.component';
import { ModalData } from 'src/app/Interface/modal-data';
import { Notification } from 'src/app/Interface/Notification';
import { Pages } from 'src/app/Interface/Pagine';
import { SitoService } from 'src/Services/Sito/sito.service';

@Component({
  selector: 'app-gestione-notifiche',
  templateUrl: './gestione-notifiche.component.html',
  styleUrl: './gestione-notifiche.component.css',
  standalone: false
})
export class GestioneNotificheComponent {

  notifiche: Notification[] = [];
  pagine: Pages[] = [];

  searchText = '';

  SelectedSize = 5;
  CurrentPage = 1;

  currentPage = 1;
  itemsPerPage = 5;
  pageSizes = [5, 10, 15, 20];

  displayedColumns: string[] = ['Pagina', 'Notifica', 'Attiva', 'Azioni'];

  constructor(private sitoService: SitoService, private dialog: MatDialog){
    this.GetNotifiche();
    this.GetPagine();
  }

  GetNotifiche(){
    this.sitoService.GetNotification().subscribe(data => {
      if (data != null && data.Data != null) {
        this.notifiche = data.Data;
      }
      else if (data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized) {
        alert("La tua sessione è scaduta, rieffettua il login");
        window.location.href = '/login';
      }
      else {
        alert(data.Error.Message);
      }
    });
  }

  GetPagine(){
      this.sitoService.GetPagine().subscribe(data => {
      if (data != null && data.Data != null) {
        this.pagine = data.Data;
      }
      else if (data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized) {
        alert("La tua sessione è scaduta, rieffettua il login");
        window.location.href = '/login';
      }
      else {
        alert(data.Error.Message);
      }
    });
  }

  get filteredData() {
    let searchValue = this.searchText.toLowerCase();
    let data : Notification[] = [];
  
    if(searchValue != "")
    {
      data = this.notifiche.filter(item => 
         item.text.toLowerCase().includes(searchValue)
        );  
    }
    else
    {
      data = this.notifiche;
    }
  
    const startIndex = (this.CurrentPage - 1) * this.SelectedSize;
    const endIndex = Math.min(startIndex + this.SelectedSize - 1, this.notifiche.length - 1);
  
    const items = data.slice(startIndex, endIndex + 1);
  
    return items;
  
  }

  PageDescription(_id: number){
    return this.pagine.find(p => p.id == _id)?.page
  }

  PageChange(event: PageEvent) {
    this.SelectedSize = event.pageSize;
    this.CurrentPage = event.pageIndex + 1;
  } 

  AddNotifica(){
    this.openModal("AddNotification", null);
  }
  
  AbilitaDisabilitaNotifica(notifica: Notification, enable: boolean){
    notifica.active = enable;
    this.sitoService.UpdateNotifica(notifica).subscribe(data => {
      if (data != null && data.Data != null) {
        alert("Stato Notifica Aggiornato")
      }
      else if (data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized) {
        alert("La tua sessione è scaduta, rieffettua il login");
        window.location.href = '/login';
      }
      else {
        alert(data.Error.Message);
      }
    });
  }

  openModal(type: string, image: Notification | null): void {
    const dialogRef = this.dialog.open(ModaleComponent, {
      data: { type, object: image } as ModalData<Notification>
    });
  }
  
  ModificaNotifica(notifica: Notification){

    let newText = prompt("Inserisci testo nuova notifica");

    if(newText == null){
      alert("impossibile aggionrare la notifica");
      return;
    }
    else{
      notifica.text = newText;
    }

    this.sitoService.UpdateNotifica(notifica).subscribe(data => {
      if (data != null && data.Data != null) {
        alert("Notifica Aggiornata")
      }
      else if (data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized) {
        alert("La tua sessione è scaduta, rieffettua il login");
        window.location.href = '/login';
      }
      else {
        alert(data.Error.Message);
      }
    });
  }

  CancellaNotifica(notifica: Notification){

  }
}
