import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/Model/User/User';
import { UtentiService } from 'src/Services/Utenti/utenti.service';

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

  constructor(private utentiService: UtentiService) { }

  async ngOnInit() {
    await (await this.utentiService.GetAllUtenti()).subscribe(data => {
      if(data != null && data.Data != null){
        this.utenti = data.Data;
      }
      else{
        alert("Errore recupero Utenti");
      }
    });
  }

  async onMenuAction(action: string, utente: User){
    switch(action){
      case "info":{
        alert("info utente");
        break;
      }

      case "admin":{
        alert("rendi admin");
        break;
      }
    }
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

  //handlePageChange(event: number): void {
  //  this.currentPage = event;
  //}
}
