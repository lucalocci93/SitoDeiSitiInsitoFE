import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Documento } from 'src/app/Model/Documento/Documento';
import { TipoDocumento } from 'src/app/Model/Documento/TipoDocumento';
import { CommonService } from 'src/Services/Common/common.service';
import { DocumentiService } from 'src/Services/Documenti/documenti.service';
import { ModalDocumentData } from 'src/app/Interface/modal-document-data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-documenti',
  templateUrl: './documenti.component.html',
  styleUrls: ['./documenti.component.css'],
  standalone: false
})
export class DocumentiComponent {
  DocList: Documento[] = [];
  DocType : TipoDocumento[] = [];

  UserId: string | null = "";
  datePipe: DatePipe = new DatePipe('en-US');

  constructor(private CommonService : CommonService, private DocumentService: DocumentiService, public dialog: MatDialog) {
    this.UserId = CommonService.getCookie("sub");
   }

  async ngOnInit() {

    await(await this.DocumentService.GetTipiDocumenti()).subscribe(data => {
      if(data != null && data.Data != null){
        this.DocType = data.Data;
      }
      else{
        if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        }
        else{
          alert("Errore recupero Tipi documento");
        }
      }
    });

    this.DocList = [];
    await(await this.DocumentService.GetUserDocuments(this.UserId)).subscribe(data => {
      if(data != null && data.Data != null){
        this.DocList = data.Data;
      }
      else{
        if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        }
        else{
          alert("Errore recupero Utenti");
        }
      }
    });
}

getTypeById(_id: number): string {
  const valueObj = this.DocType.find(value => value.id === _id);
  return valueObj ? valueObj.descrizione : '';
}

async openDoc(DocId: string | null) {
  var doc = null;
  await(await this.DocumentService.GetDocument(DocId)).subscribe(data => {
    if(data != null && data.Data != null){
        doc = data.Data.datiDocumento.replace('data:application/pdf;base64,','');
        
        const byteArray = new Uint8Array(
          atob(doc)
          .split('')
          .map((char) => char.charCodeAt(0))
        );

        const file = new Blob([byteArray], {type: 'application/pdf'});
        const fileUrl = URL.createObjectURL(file);

        let fileName = data.Data.nomeDocumento;
        let link = document.createElement('a');
        link.download = fileName;
        link.target = '_blank';
        link.href = fileUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
      }
    else{
      if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
        alert("La tua sessione è scaduta, rieffettua il login");
        window.location.href = '/login';
      }
      else{
        alert("Errore recupero Utenti");
      }
    }
  });
}

}
