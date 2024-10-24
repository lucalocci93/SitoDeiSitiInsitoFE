import { Component } from '@angular/core';
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
    return this.utenti.filter(item => 
      item.nome.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.cognome.toString().includes(this.searchText) ||
      item.email.toString().includes(this.searchText) ||
      item.codFiscale.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
