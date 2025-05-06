import { HttpStatusCode } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Page } from 'ngx-pagination';
import { ModaleComponent } from 'src/app/Component/modale/modale.component';
import { Pages } from 'src/app/Interface/Pagine';
import { ModalData } from 'src/app/Interface/modal-data';
import { Operation, Pagine } from 'src/app/Model/Base/enum';
import { Graphics } from 'src/app/Model/Sito/Grafica';
import { CommonService } from 'src/Services/Common/common.service';
import { SitoService } from 'src/Services/Sito/sito.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-gestionegrafica',
  standalone: false,
  templateUrl: './gestionegrafica.component.html',
  styleUrl: './gestionegrafica.component.css'
})
export class GestioneGraficaComponent {

  @ViewChild(MatPaginator)
   paginator!: MatPaginator;
   
    homepage: Graphics[] = [];
    contatti: Graphics[] = [];
    news: Graphics[] = [];

    pagine: Pages[] = [];

    homepagesearchText = '';
    contattisearchText = '';
    newssearchText = '';

    homepageSelectedSize = 5;
    homepageCurrentPage = 1;
    homepageTotalPages = 0;
    contattiSelectedSize = 5;
    contattiCurrentPage = 1;
    contattiTotalPages = 0;
    newsCurrentPage = 1;
    newsSelectedSize = 5;
    newsTotalPages = 0;

    currentPage = 1;
    itemsPerPage = 5;
    pageSizes = [5, 10, 15, 20];
  
    displayedColumns: string[] = ['Url', 'Sezione', 'Titolo', 'Descrizione', 'TestoAggiuntivo', 'Ordinamento', 'Azioni'];
  
    constructor(private sitoService: SitoService, private common: CommonService, public dialog: MatDialog) { }
  
    @ViewChild('homepageContainer') homepageContainer!: ElementRef;
    
    async ngOnInit() {
      await (await this.sitoService.GetGrafiche()).subscribe(data => {
        if(data != null && data.Data != null){
          this.homepage = data.Data.filter(d => d.page == Pagine.Homepage);
          this.homepageTotalPages = Math.ceil(this.homepage.length / this.homepageSelectedSize);
          this.contatti = data.Data.filter(d => d.page == Pagine.Contatti);
          this.contattiTotalPages = Math.ceil(this.contatti.length / this.contattiSelectedSize);
          this.news = data.Data.filter(d => d.page == Pagine.News);
          this.newsTotalPages = Math.ceil(this.news.length / this.newsSelectedSize);
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
  
    
  homepageonPageChange(event: PageEvent) {
    this.homepageSelectedSize = event.pageSize;
    this.homepageCurrentPage = event.pageIndex + 1;
  } 

  contattionPageChange(event: PageEvent) {
    this.contattiSelectedSize = event.pageSize;
    this.contattiCurrentPage = event.pageIndex + 1;
  } 

  newsonPageChange(event: PageEvent) {
    this.newsSelectedSize = event.pageSize;
    this.newsCurrentPage = event.pageIndex + 1;
  } 
  
    openModal(type: string, image: Graphics | null): void {
      const dialogRef = this.dialog.open(ModaleComponent, {
        data: { type, object: image } as ModalData<Graphics>
      });
    }
  
    get HomepagefilteredData() {
      let searchValue = this.homepagesearchText.toLowerCase();
      let data : Graphics[] = [];

      if(searchValue != "")
        {
          data = this.homepage.filter(item => 
            item.urlImage.toLowerCase().includes(searchValue) ||
            item.title.toString().includes(searchValue) ||
            item.description.toLowerCase().includes(searchValue)
          );  
      }
      else
      {
        data = this.homepage;
      }

      const startIndex = (this.homepageCurrentPage - 1) * this.homepageSelectedSize;
      const endIndex = Math.min(startIndex + this.homepageSelectedSize - 1, this.homepage.length - 1);

      const items = data.slice(startIndex, endIndex + 1);

      return items;

    }

    get ContattifilteredData() {
      let searchValue = this.contattisearchText.toLowerCase();
      let data : Graphics[] = [];

      if(searchValue != "")
        {
          data = this.contatti.filter(item => 
            item.urlImage.toLowerCase().includes(searchValue) ||
            item.title.toString().includes(searchValue) ||
            item.description.toLowerCase().includes(searchValue)
          );  
      }
      else  
      {
        data = this.contatti;
      }

      const startIndex = (this.contattiCurrentPage - 1) * this.homepageSelectedSize;
      const endIndex = Math.min(startIndex + this.homepageSelectedSize - 1, this.homepage.length - 1);

      const items = data.slice(startIndex, endIndex + 1);

      return items;

    }

    get NewsfilteredData() {
      let searchValue = this.newssearchText.toLowerCase();
      let data : Graphics[] = [];

      if(searchValue != "")
        {
          data = this.news.filter(item => 
            item.urlImage.toLowerCase().includes(searchValue) ||
            item.title.toString().includes(searchValue) ||
            item.description.toLowerCase().includes(searchValue)
          );  
      }
      else
      {
        data = this.news;
      }

      const startIndex = (this.newsCurrentPage - 1) * this.homepageSelectedSize;
      const endIndex = Math.min(startIndex + this.homepageSelectedSize - 1, this.homepage.length - 1);

      const items = data.slice(startIndex, endIndex + 1);

      return items;

    }

  
    GetPagina(id: number) : string{
      let pagina = this.pagine.find(f => f.id == id);
      return pagina != null ? pagina.page : "N/A";
    }

    async AddImmagine(){
      this.openModal("AddSezione", null);
    }

    async CancellaImmagine(immagine: Graphics){
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
  
    
    toggleCollapseHomepage() 
    {
      const content = this.homepageContainer.nativeElement;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
  }
  
}
