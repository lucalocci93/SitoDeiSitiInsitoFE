import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ModaleComponent } from 'src/app/Component/modale/modale.component';
import { ModalData } from 'src/app/Interface/modal-data';
import { Redirection } from 'src/app/Model/Sito/Redirezioni';
import { CommonService } from 'src/Services/Common/common.service';
import { SitoService } from 'src/Services/Sito/sito.service';

import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-gestione-redirezioni',
  templateUrl: './gestione-redirezioni.component.html',
  styleUrl: './gestione-redirezioni.component.css',
  standalone: false
})
export class GestioneRedirezioniComponent {

  redirezioni: Redirection[] = [];

  searchText = '';

  SelectedSize = 5;
  CurrentPage = 1;

  currentPage = 1;
  itemsPerPage = 5;
  pageSizes = [5, 10, 15, 20];

  displayedColumns: string[] = ['Url', 'Url Redirezione', 'Attiva', 'Azioni'];

  constructor(private commonService: CommonService, private sitoService: SitoService, public dialog: MatDialog,
    private clipboard: Clipboard)
  {
    this.GetRedirezioni();
    
  }

  async GetRedirezioni(){
  (await this.sitoService.GetRedirezioni()).subscribe(data => {
      if (data != null && data.Data != null) {
        this.redirezioni = data.Data;
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
      let data : Redirection[] = [];

      if(searchValue != "")
        {
          data = this.redirezioni.filter(item => 
            item.url.toLowerCase().includes(searchValue)
          );  
      }
      else
      {
        data = this.redirezioni;
      }

      const startIndex = (this.CurrentPage - 1) * this.SelectedSize;
      const endIndex = Math.min(startIndex + this.SelectedSize - 1, this.redirezioni.length - 1);

      const items = data.slice(startIndex, endIndex + 1);

      return items;

    }

    PageChange(event: PageEvent) {
      this.SelectedSize = event.pageSize;
      this.CurrentPage = event.pageIndex + 1;
    } 
    
    openModal(type: string, redirection: Redirection | null): void {
      const dialogRef = this.dialog.open(ModaleComponent, {
        data: { type, object: redirection } as ModalData<Redirection>
      });
    }

    AddRedirezione(){
      this.openModal("AddRedirezione", null);
    }

    async AbilitaDisabilitaRedirezione(redirezione: Redirection, toggle: boolean){

      let redirection = new Redirection(redirezione.id, redirezione.url, null, toggle);
      await (await this.sitoService.ToggleRedirezione(redirection)).subscribe(data => {
        if(data != null && data.Data != null){
          window.location.reload();
        }
        else if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        }
        else{
          alert("Errore attivazione/disabilitazione redirezione");
        }
      });  
    }

    async CancellaRedirezione(redirezione: Redirection){
      await (await this.sitoService.RemoveRedirezione(redirezione)).subscribe(data => {
        if(data != null && data.Data != null){
          window.location.reload();
        }
        else if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        }
        else{
          alert("Errore cancellazione redirezione");
        }
      });  
    }

    
    copyToClipboard(value: string): void {
      this.clipboard.copy(value);
    }  
}
