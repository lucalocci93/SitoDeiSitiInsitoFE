import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ITemplate } from 'src/app/Interface/ITemplate';
import { Template } from 'src/app/Model/Sito/Template';
import { SitoService } from 'src/Services/Sito/sito.service';

@Component({
  selector: 'app-gestione-template',
  templateUrl: './gestione-template.component.html',
  styleUrl: './gestione-template.component.css',
  standalone: false
})
export class GestioneTemplateComponent {
  template: ITemplate[] = [];

  searchText = '';

  SelectedSize = 5;
  CurrentPage = 1;

  currentPage = 1;
  itemsPerPage = 5;
  pageSizes = [5, 10, 15, 20];

  displayedColumns: string[] = ['Nome', 'Header', 'Body', 'Footer', 'Azioni'];

  constructor(private sitoService: SitoService, private dialog: MatDialog){
    this.GetTemplate();
  }

  GetTemplate(){
    this.sitoService.GetTemplates().subscribe(data => {
      if (data != null && data.Data != null) {
        this.template = data.Data;
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
    let data : ITemplate[] = [];
  
    if(searchValue != "")
    {
      data = this.template.filter(item => 
         item.TemplateName.includes(searchValue) ||
         item.TemplateHeaderHtml.includes(searchValue) ||
         item.TemplateBodyHtml.includes(searchValue) ||
         item.TemplateFooterHtml.includes(searchValue)
        );  
    }
    else
    {
      data = this.template;
    }
  
    const startIndex = (this.CurrentPage - 1) * this.SelectedSize;
    const endIndex = Math.min(startIndex + this.SelectedSize - 1, this.template.length - 1);
  
    const items = data.slice(startIndex, endIndex + 1);
  
    return items;
  
  }

  PageChange(event: PageEvent) {
    this.SelectedSize = event.pageSize;
    this.CurrentPage = event.pageIndex + 1;
  } 

  ModificaHeader(template: ITemplate) {
    let newHeader = prompt("Inserisci il nuovo Header HTML");
    template.TemplateHeaderHtml = newHeader || template.TemplateHeaderHtml;

    this.sitoService.UpdateTemplate(template).subscribe(data => {
      if (data != null && data.Data != null) {
        alert("Header Aggiornato")
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

  ModificaBody(template: ITemplate) {
    let newBody = prompt("Inserisci il nuovo Body HTML");
    template.TemplateBodyHtml = newBody || template.TemplateBodyHtml;

    this.sitoService.UpdateTemplate(template).subscribe(data => {
      if (data != null && data.Data != null) {
        alert("Body Aggiornato")
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

  ModificaFooter(template: ITemplate) {
    let newFooter = prompt("Inserisci il nuovo Footer HTML");
    template.TemplateFooterHtml = newFooter || template.TemplateFooterHtml;

    this.sitoService.UpdateTemplate(template).subscribe(data => {
      if (data != null && data.Data != null) {
        alert("Footer Aggiornato")
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

  AddTemplate() {
    let newTemplateName = prompt("Inserisci il nome del nuovo template");
    if (!newTemplateName) {
      alert("Nome del template non valido");
      return;
    }
    let newHeader = prompt("Inserisci il nuovo Header HTML");
    if (!newHeader) {
      alert("Header non valido");
      return;
    }
    let newBody = prompt("Inserisci il nuovo Body HTML");
    if (!newBody) {
      alert("Body non valido");
      return;
    }
    let newFooter = prompt("Inserisci il nuovo Footer HTML");
    if (!newFooter) {
      alert("Footer non valido");
      return;
    }

    let newTemplate = new Template(newTemplateName, newHeader, newBody, newFooter);

    this.sitoService.AddTemplate(newTemplate).subscribe(data => {
      if (data != null && data.Data != null) {
        alert("Template Aggiunto");
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

}
