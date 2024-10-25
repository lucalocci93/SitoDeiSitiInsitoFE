import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/Model/User/User';
import { UtentiService } from 'src/Services/Utenti/utenti.service';
import { ModaleComponent } from '../modale/modale.component';
import { ModalData } from 'src/app/Interface/modal-data';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-gestioneutenti',
  templateUrl: './gestioneutenti.component.html',
  styleUrls: ['./gestioneutenti.component.css']
})
export class GestioneutentiComponent {

  utenti: User[] = [];
  searchText = '';
  currentPage = 1;
  itemsPerPage = 5;
  pageSizes = [5, 10, 15, 20];

  constructor(private utentiService: UtentiService, public dialog: MatDialog) { }

  async ngOnInit() {
    await (await this.utentiService.GetAllUtenti()).subscribe(data => {
      if(data != null && data.Data != null){
        this.utenti = data.Data;
      }
      else if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
        alert("La tua sessione è scaduta, rieffettua il login");
        window.location.href = '/login';
      }
      else{
        alert("Errore recupero Utenti");
      }
});
  }

  openModal(type: string, user: User): void {
    const dialogRef = this.dialog.open(ModaleComponent, {
      data: { type, user } as ModalData
    });
  }

  async RendiAdmin(item: User){
    alert("set utente admin");
  }
  
  get filteredData() {
    let searchValue = this.searchText.toLowerCase();
    return this.utenti.filter(item => 
      item.nome.toLowerCase().includes(searchValue) ||
      item.cognome.toString().includes(searchValue) ||
      item.email.toString().includes(searchValue) ||
      item.codFiscale.toLowerCase().includes(searchValue)
    );
  }

}
