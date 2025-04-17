import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Page } from 'ngx-pagination';
import { ModaleComponent } from 'src/app/Component/modale/modale.component';
import { Pages } from 'src/app/Interface/Pagine';
import { ModalData } from 'src/app/Interface/modal-data';
import { Operation } from 'src/app/Model/Base/enum';
import { Images } from 'src/app/Model/Sito/Immagine';
import { CommonService } from 'src/Services/Common/common.service';
import { SitoService } from 'src/Services/Sito/sito.service';

@Component({
  selector: 'app-gestionegrafica',
  standalone: false,
  templateUrl: './gestionegrafica.component.html',
  styleUrl: './gestionegrafica.component.css'
})
export class GestioneGraficaComponent {

    immagini: Images[] = [];
    pagine: Pages[] = [];
    searchText = '';
    currentPage = 1;
    itemsPerPage = 5;
    pageSizes = [5, 10, 15, 20];
  
    displayedColumns: string[] = ['Url', 'Pagina', 'Sezione', 'Titolo', 'Descrizione', 'TestoAggiuntivo', 'Ordinamento', 'Azioni'];
  
    constructor(private sitoService: SitoService, private common: CommonService, public dialog: MatDialog) { }
  
    async ngOnInit() {
      await (await this.sitoService.GetImmagini()).subscribe(data => {
        if(data != null && data.Data != null){
          this.immagini = data.Data;
        }
        else if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        }
        else{
          alert(data.Error.Message);
        }
      });
      

      await (await this.sitoService.GetPagine()).subscribe(data => {
        if(data != null && data.Data != null){
          this.pagine = data.Data;
        }
        else if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        }
        else{
          alert(data.Error.Message);
        }
      });
    }
  
    openModal(type: string, image: Images | null): void {
      const dialogRef = this.dialog.open(ModaleComponent, {
        data: { type, object: image } as ModalData<Images>
      });
    }
  
    get filteredData() {
      let searchValue = this.searchText.toLowerCase();
      return this.immagini.filter(item => 
        item.urlImage.toLowerCase().includes(searchValue) ||
        item.title.toString().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue)
      );
    }
  
    GetPagina(id: number) : string{
      let pagina = this.pagine.find(f => f.id == id);
      return pagina != null ? pagina.page : "N/A";
    }

    async AddImmagine(){
      this.openModal("AddImage", null);
    }

    async CancellaImmagine(immagine: Images){
      await (await this.sitoService.RemoveImmagine(immagine)).subscribe(data => {
        if(data != null && data.Data != null){
          window.location.reload();
        }
        else if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        }
        else{
          alert("Errore cancellazione immagine");
        }
      });  
    }
  
}
